#!/usr/bin/env python3

"""doc"""
import argparse
import os
import subprocess

if __name__ == "__main__":
    # parser
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--edit", action="store_true", help="open the script in vscode")
    parser.add_argument("-f", help="the markdown file to convert")
    parser.add_argument("-o", help="the output file name")
    parser.add_argument("-t", help="title")
    args = parser.parse_args()
    if args.edit:
        subprocess.Popen(f"code {__file__}", shell=True)
        os.sys.exit()

    # actions
    args.t = args.t or "Title"
    if args.f is None or args.o is None:
        print("missing argument -o or -f")
    else:
        subprocess.run(f"markdown-it {args.f} > {args.o}", shell=True)
        with open("template.html", "r", encoding="utf8") as file:
            template_html = file.read()
        with open(args.o, "r", encoding="utf8") as file:
            index_html = file.read()
        template_html = template_html.replace("{title}", args.t)
        template_html = template_html.replace("{body}", index_html)
        with open(args.o, "w", encoding="utf8") as file:
            file.write(template_html)
