+++
# Slider widget.
widget = "slider"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 10  # Order that this section will appear.

# Slide interval.
# Use `false` to disable animation or enter a time in ms, e.g. `5000` (5s).
interval = 2000

# Slide height (optional).
# E.g. `500px` for 500 pixels or `calc(100vh - 70px)` for full screen.
height = "calc(50vh - 70px)"
title = "Check out some of the stuff I made"
# Slides.
# Duplicate an `[[item]]` block to add more slides.
[[item]]
  title = "UltraGen"
  content = "A map generator that uses            specilized cellular algorithms I wrote my-self"
  align = "right"  # Choose `center`, `left`, or `right`.

  # Overlay a color or image (optional).
  overlay_color = "#666"  # An HTML color value.
  overlay_img = "./gif/heroComputers.gif"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.5  # Darken the image. Value in range 0-1.

  # Call to action button (optional).
  cta_label = "Check out the Repo on GitLab"
  cta_url = "https://gitlab.com/denchyaknow/Ultra_Map_Generator" 
  cta_icon_pack = "fas"
  cta_icon = "gitlab"

[[item]]
  title = "Left"
  content = "I am left aligned :smile:"
  align = "left"

  overlay_color = "#555"  # An HTML color value.
  overlay_img = "./gif/heroResturant.gif"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.5  # Darken the image. Value in range 0-1.

[[item]]
  title = "Right"
  content = "I am right aligned :smile:"
  align = "right"

  overlay_color = "#333"  # An HTML color value.
  overlay_img = "./gif/heroResturant.gif"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.5  # Darken the image. Value in range 0-1.
+++
