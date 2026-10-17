#!/usr/bin/env python3
"""Generate the four KindWell digital deliverables as real, valid PDFs.

These are the files paid members download. Each is a genuine reflective
worksheet: educational and non-clinical, matching the copy rules in
CONTENT_BRIEF.md (no diagnosis, no treatment claims, crisis note where a
mental-health topic appears). Written with the stdlib only so the build has no
new dependencies.
"""
import os
import textwrap
import zlib

OUT = os.path.join(os.path.dirname(__file__), "..", "private", "digital")

CRISIS = ("If any of this feels urgent, please reach out to your local emergency "
          "number or a crisis line such as 988 in the US. You do not have to "
          "handle a hard moment alone.")


def esc(text):
    return (text.replace("\\", r"\\").replace("(", r"\(").replace(")", r"\)"))


class Page:
    """A single PDF page: fixed width, flowed lines."""

    def __init__(self, width=612, height=792):
        self.width = width
        self.height = height
        self.ops = []

    def text(self, x, y, text, size=11.0, font="F1"):
        self.ops.append(f"BT /{font} {size} Tf 1 0 0 1 {x} {y} Tm ({esc(text)}) Tj ET")

    def line(self, x1, y1, x2, y2, width=0.6):
        self.ops.append(f"{width} w {x1} {y1} m {x2} {y2} l S")

    def content(self):
        return "\n".join(self.ops).encode("latin-1", "replace")


def render(pages):
    """Assemble pages into a single valid PDF document."""
    objects = []

    def add(data):
        objects.append(data)
        return len(objects)

    font_regular = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    font_bold = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")

    page_ids = []
    content_ids = []
    for page in pages:
        stream = zlib.compress(page.content())
        cid = add(b"<< /Length %d /Filter /FlateDecode >>\nstream\n" % len(stream)
                  + stream + b"\nendstream")
        content_ids.append(cid)

    pages_id_placeholder = len(objects) + len(pages) + 1
    for i, page in enumerate(pages):
        pid = add(
            b"<< /Type /Page /Parent %d 0 R /MediaBox [0 0 %d %d] "
            b"/Resources << /Font << /F1 %d 0 R /F2 %d 0 R >> >> "
            b"/Contents %d 0 R >>"
            % (pages_id_placeholder, page.width, page.height,
               font_regular, font_bold, content_ids[i])
        )
        page_ids.append(pid)

    pages_id = add(
        b"<< /Type /Pages /Kids [%s] /Count %d >>"
        % (b" ".join(b"%d 0 R" % p for p in page_ids), len(page_ids))
    )
    assert pages_id == pages_id_placeholder, (pages_id, pages_id_placeholder)
    catalog_id = add(b"<< /Type /Catalog /Pages %d 0 R >>" % pages_id)

    out = bytearray(b"%PDF-1.4\n")
    offsets = []
    for i, body in enumerate(objects, start=1):
        offsets.append(len(out))
        out += b"%d 0 obj\n" % i + body + b"\nendobj\n"

    xref_at = len(out)
    out += b"xref\n0 %d\n" % (len(objects) + 1)
    out += b"0000000000 65535 f \n"
    for off in offsets:
        out += b"%010d 00000 n \n" % off
    out += b"trailer\n<< /Size %d /Root %d 0 R >>\nstartxref\n%d\n%%%%EOF\n" % (
        len(objects) + 1, catalog_id, xref_at)
    return bytes(out)


def sheet(title, subtitle, sections, footer_note=None, lines_per_section=9):
    """One worksheet page: title, intro, and ruled writing sections."""
    page = Page()
    y = 742
    page.text(56, y, title, size=19, font="F2")
    y -= 20
    page.text(56, y, subtitle, size=10.5)
    y -= 12
    page.line(56, y, 556, y, width=1.1)
    y -= 26

    for heading, prompt, prompts in sections:
        page.text(56, y, heading, size=12.5, font="F2")
        y -= 16
        for para in textwrap.wrap(prompt, width=88):
            page.text(56, y, para, size=10)
            y -= 13
        y -= 6
        for _ in range(lines_per_section):
            page.line(56, y, 556, y, width=0.4)
            y -= 17
        y -= 12

    if footer_note:
        for para in textwrap.wrap(footer_note, width=92):
            page.text(56, max(46, y), para, size=8.5)
            y -= 11

    return page


PRODUCTS = {
    "self-compassion-workbook.pdf": [
        sheet(
            "The Self-Compassion Workbook",
            "KindWell  -  a reflective practice you can return to",
            [
                ("1. A kinder voice", "When your inner critic speaks, write what it says "
                 "in the first column, then write what a kind mentor would say in response.",
                 []),
                ("2. Common humanity", "Think of a moment when you felt behind. Write what "
                 "makes it hard, and one thing that would make it bearable.",
                 []),
                ("3. A small act of care", "Name one small thing you could do for yourself "
                 "this week. Keep it small enough that you would actually do it.",
                 []),
            ],
            "This workbook is educational and reflective. It is not therapy, diagnosis, "
            "or treatment. " + CRISIS,
        ),
    ],
    "kindness-habit-tracker.pdf": [
        sheet(
            "The Kindness Habit Tracker",
            "KindWell  -  one small act at a time",
            [
                ("Week 1: noticing", "Each day, note one moment you could have been "
                 "gentler with yourself, and one moment you were.", []),
                ("Week 2: choosing", "Pick one habit from week one and repeat it daily. "
                 "Mark each day you did it.", []),
                ("Week 3: sharing", "Try offering one act of kindness outward. Note how "
                 "it felt to give and to receive.", []),
            ],
            "A reflective practice, not a clinical tool. " + CRISIS,
        ),
    ],
    "printable-practice-cards.pdf": [
        sheet(
            "Printable Practice Cards",
            "KindWell  -  cut along the lines, keep what helps",
            [
                ("Arrive", "Before you begin, feel your feet on the floor. Take three "
                 "breaths that you do not need to change.", []),
                ("Release", "Name the thing you are carrying, then set it down for the "
                 "length of this practice.", []),
                ("Soles", "Warm the soles of your feet. Feel the surface holding you up.",
                 []),
            ],
            "These cards support general wellbeing and are educational in nature. "
            "They do not treat any condition. " + CRISIS,
            lines_per_section=5,
        ),
    ],
    "emotional-support-quick-sheets.pdf": [
        sheet(
            "Emotional Support Quick Sheets",
            "KindWell  -  what to say, and what to do next",
            [
                ("When someone is struggling", "Ask, then listen without fixing. "
                 "'That sounds heavy. Do you want me to stay with you while it settles?'",
                 []),
                ("When you are the one struggling", "Tell one person before the day ends. "
                 "Name what you need: company, quiet, or help booking support.", []),
                ("When it is more than a hard day", "Reach a clinician or a crisis line. "
                 "Asking for real support is a strength, not a failure.", []),
            ],
            "General educational information, not medical advice or a diagnosis. "
            "For anything urgent, contact your clinician or local emergency service. "
            + CRISIS,
            lines_per_section=6,
        ),
    ],
}


def main():
    target = os.path.normpath(OUT)
    os.makedirs(target, exist_ok=True)
    for name, pages in PRODUCTS.items():
        path = os.path.join(target, name)
        data = render(pages)
        with open(path, "wb") as handle:
            handle.write(data)
        print(f"wrote {path} ({len(data):,} bytes)")


if __name__ == "__main__":
    main()
