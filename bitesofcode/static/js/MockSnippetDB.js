MockSnippetDB =  function() 
{

}

MockSnippetDB.getSnippet = function(snippetID)
{
	switch(snippetID)
	{
		case "test":
			var str = 'public class PiCalculator\n\
{\n\
	public PiCalculator(){}\n\
	\n\
	private int isInCircle(int x, int y)\n\
	{\n\
		distance = ((centerX - x)**2 + (centerY - y)**2)**.5\n\
	}\n\
	\n\
	public double calculate()\n\
	{\n\
		return 0.0;\n\
	}\n\
	\n\
	public static void main(String[] args)\n\
	{\n\
		PiCalculator calculator = new PiCalculator();\n\
		double hopefullyPi = calculator.calculate();\n\
		System.out.println(hopefullyPi);\n\
		//comment to make it overflow\n\
		//another\n\
		//yep, another one\n\
		System.out.println("Testing");\n\
		System.out.println("Testing Again");\n\
		\n\
	}\n\
}';
			return str;

		default:
			return "Didn't find your thing";
	}
}