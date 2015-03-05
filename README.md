# OI-Tooltips
Experimental tooltip solution that uses absolute positioning to position tooltip relative to the document. Currently uses data-attribute `tooltip-v2` to avoid conflicting with existing tooltip solution. Should eventually be merged into Weavr.

###Usage

```HTML
<head>
  <link rel="stylesheet" href="OI.tooltip.css">
</head>
<body>
  <!-- The most basic configuration. Tooltip will be centered above the element at 100% max-width. -->
  <span data-tooltip-v2="This is a tooltip!">Hover over me</span>
  
  <!-- An example with all the options. Tooltip will be green, positioned below the element, at a max width of 300px. -->
  <span data-tooltip-v2="Check out this tooltip! It's a pretty good one, if you ask me." data-tooltip-width="300" data-tooltip-style="green" data-tooltip-position="bottom">Hover over me, too</span>
  
  <span class="tooltip-me">Don't forget about me!</span>
  
  <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <script src="OI.tooltip.min.js"></script>
  
  <script>
    // Instantiate all tooltips at once, using data-attributes or default options.
    $('[data-tooltip-v2']).each(function() {
      var tooltip = new Tooltip($(this));
    });
    
    // Manually add a tooltip to an element
    var manualTooltip = new Tooltip($('.tooltip-me'), {
      message: "This is the tooltip content.",
      position: "bottom",
      max: 300,
      style: "teal"
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
|Option|Type|Default|Description|
|---|---|---|---|
|position|string|"top"|Position of the tooltip relative to the element. Currently accepts 'top' and 'bottom'. Can be set via `data-tooltip-position` attribute.|
|message|string|null|The content of the tooltip. Can be set via `data-tooltip-v2` attribute.|
|max|integer or string|"100%"|The maximum width of the tooltip. If value is an integer, width will be set in pixels. If a string, it will expect a percentage. Can be set via `data-tooltip-width` attribute.|
|style|string|null|Sets color of tooltip via CSS class. Current options are 'purple', 'teal', 'orange', 'pink', 'green', and 'offwhite'. Defaults to 'purple'. Can be set via `data-tooltip-style`. Additional styles could be configured via custom CSS.|
