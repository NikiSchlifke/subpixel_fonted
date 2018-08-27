## Drawing Outlines
Have two outlines, one where the inner, 
non-antialiased outline of the glyph will be, one where the center point of the antialiasing radient will be.

## Antialias Gradients
Have three gradients:
- for the left side (blueish use something like 30000K CCT)
- for the right side (reddish, use something like 1000CCT)
- for up & down (monochrome)

## Mix Antialias Gradients
Depending on the angular value of the outline calculate
the appropriate gradient with trigonometric. 