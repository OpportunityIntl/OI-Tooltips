# OI-Tooltips
Experimental tooltip solution that uses absolute positioning to position tooltip relative to the document.

###Arguments
|Argument|Type|Required?|Description|
|----|---------|-----------|-------|
|elem|jQuery object|required|The object that triggers and configures the tooltip. The tooltip will be centered above or below this object.|
|opts|hash|optional|A hash that contains configuration options. Options can be set via data attributes, or explicitly with this hash.|

###Options
|Option|Type|Description|
|---|---|---|
|position|string|Position of the tooltip relative to the element. Currently accepts 'top' and 'bottom'. Can be set via 'data-tooltip-position' attribute. Defaults to 'top'.
|message|string|The content of the tooltip. Can be set via 'data-tooltip-v2' attribute.|
|max|integer or string|The maximum width, in pixels, of the tooltip. Can be set via 'data-tooltip-width' attribute. Defaults to 300.|
|style|string|Sets color of tooltip via CSS class. Current options are 'purple', 'teal', 'orange', 'pink', and 'green'. Defaults to a light gray background with black text. Additional styles could be configured via custom CSS|
