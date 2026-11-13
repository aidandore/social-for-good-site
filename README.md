# Social for Good — website

Astro static site. Hosted on Netlify, edited via Pages CMS (`.pages.yml`).

- `npm run dev`: local preview at http://localhost:4321
- `npm run build`: builds to `dist/` (Netlify runs this automatically)

## Where content lives
| What | File(s) | Editable in CMS |
|---|---|---|
| Blog posts | `src/content/posts/*.md` | ✅ Insights |
| Case studies | `src/content/work/*.md` | ✅ Case studies |
| Testimonials | `src/content/testimonials/*.md` | ✅ Testimonials |
| Client logos | `src/content/clients/*.md` (+ images in `public/images`) | ✅ Client logos |
| Photo, email, phone, LinkedIn, booking link | `src/data/settings.json` | ✅ Contact & photo |
| Services, prices, process steps, FAQ | `src/data/services.json` | — (developer) |
| Training topics & credentials | `src/data/training.json` | — (developer) |

Behaviour worth knowing:
- Insights only appears in the nav once there's a post with `draft: false`.
- Andrew's photo falls back to a branded quote block until `settings.json → photo` is set.
- The contact form is a Netlify Form. Submissions go to the Netlify dashboard / email notifications.

`_legacy/` holds the previous static HTML mock-up for reference and can be deleted.
