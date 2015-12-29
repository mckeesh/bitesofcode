PageHandler = function(){}

PageHandler.load = function()
{
	SnippetHandler.load();
}

PageHandler.setSnippet = function(str)
{
	$(".snippet-foreground").html(str);
}

window.onload = PageHandler.load;