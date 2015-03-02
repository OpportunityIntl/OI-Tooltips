# OI-Tooltips
Experimental tooltip solution that uses absolute positioning to position tooltip relative to the document. Currently uses data-attribute 'tooltip-v2' to avoid conflicting with existing tooltip solution.

###Usage

```HTML
<head>
  <link rel="stylesheet" href="OI.tooltip.css">
</head>
<body>
  <!-- The most basic configuration. Tooltip will be centered above the element at 100% max-width. -->
  <span data-tooltip-v2="This is a tooltip!">Hover over me</span>
  
  <!-- An example with all the options. Tooltip will be purple, positioned below the element, at a max width of 300px. -->
  <span data-tooltip-v2="Check out this tooltip! It's a pretty good one, if you ask me." data-tooltip-width="300" data-tooltip-style="purple" data-tooltip-position="bottom">Hover over me, too</span>
  
  <script src="OI.tooltip.min.js"></script>
  <script>
  $('[data-tooltip-v2']).each(function() {
    var tooltip = new Tooltip($(this));
  });
  </script>
</body>
```

###Arguments
|Argument|Type|Required?|Description|
|----|---------|-----------|-------|
|elem|jQuery object|required|The object that triggers and configures the tooltip. The tooltip will be centered above or below this object.|
|opts|hash|optional|A hash that contains configuration options. Options can be set via data attributes, or explicitly with this hash.|

###Options
|Option|Type|Description|
|---|---|---|
|position|string|Position of the tooltip relative to the element. Currently accepts 'top' and 'bottom'. Can be set via `data-tooltip-position` attribute. Defaults to 'top'.
|message|string|The content of the tooltip. Can be set via `data-tooltip-v2` attribute.|
|max|integer or string|The maximum width, in pixels, of the tooltip. Can be set via `data-tooltip-width` attribute. Defaults to 300.|
|style|string|Sets color of tooltip via CSS class. Current options are 'purple', 'teal', 'orange', 'pink', and 'green'. Defaults to a light gray background with black text. Can be set via `data-tooltip-style`. Additional styles could be configured via custom CSS.|
