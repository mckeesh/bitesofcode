SnippetHandler = function() 
{
	
}

SnippetHandler.load = function()
{
	var mocksnippet = MockSnippetDB.getSnippet("test");
	mocksnippet = processSnippet(mocksnippet);
	PageHandler.setSnippet(mocksnippet);
}

var replaceAll = function(str, find, replace) 
{
  return str.replace(new RegExp(find, 'g'), replace);
}

var formatKeyword = function(keyword)
{
	return "<text class='keyword'>" + keyword + "</text>";
}

var formatString = function(unformattedString)
{
	return "<text class='string'>" + unformattedString + "</text>";
}

var processSnippet = function(snippet) 
{
	snippet = "<pre>" + snippet + "</pre>";

	var betweenQuotes = snippet.match(/(".*?")|('.*?')/g);

	for(var i in betweenQuotes)
	{
		var string = betweenQuotes[i];
		snippet = replaceAll(snippet, string, formatString(string));
	}

	var keywords = Keywords.java;
	for(var i in Keywords.java)
	{
		var keyword = keywords[i];
		if(snippet.indexOf(keyword) > -1)
		{
			console.log(keyword);
			var keywordWithBuffer = keyword + " ";
			snippet = replaceAll(snippet, keywordWithBuffer, formatKeyword(keywordWithBuffer));
		}
	}

	return snippet;
}