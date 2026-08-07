Source artwork for project previews.

Drop full-resolution screenshots here, named after the project:

    better-beta-map.png
    better-beta-profile.png

Then optimise into `public/images/projects/` — that folder is what the site
serves, and it should hold web-sized assets, not 2 MB phone screenshots:

    python3 - <<'PY'
    from PIL import Image
    for name in ['better-beta-map', 'better-beta-profile']:
        im = Image.open(f'images/projects/{name}.png').convert('RGB')
        im.thumbnail((900, 900))
        im.save(f'public/images/projects/{name}.jpg', 'JPEG', quality=78, optimize=True)
    PY

Finally, uncomment the `cover:` and `coverAlt:` lines in the project's Markdown
file under `src/content/projects/`.

A project with no `cover` renders with no media column at all — there is no
reserved empty space to fill, so leaving artwork out is a valid choice rather
than a gap.
