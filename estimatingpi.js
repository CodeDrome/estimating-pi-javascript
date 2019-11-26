
window.onload = function()
{
    writeToConsole("EstimatingPi<br/><br/>", "console");

    Fractions();

    FrancoisViete();

    JohnWallis();

    JohnMachin();

    GregoryLeibniz();

    Nilakantha();
};


function printAsText(pi)
{
    const PI_STRING = "3.141592653589793";

    let pi_string = pi.toFixed(15);

    writeToConsole(`Definitive ${PI_STRING}<br/>Calculated `, "console");

    for(let i = 0, l = pi_string.length; i < l; i++)
    {
        if(pi_string[i] == PI_STRING[i])
        {
            writeToConsole(`<span class="green">${pi_string[i]}</span>`, "console");
        }
        else
        {
            writeToConsole(`<span class="red">${pi_string[i]}</span>`, "console");
        }
    }

    writeToConsole("<br/><br/>", "console");
}


function Fractions()
{
    let pi = 22 / 7;
    writeToConsole("22/7<br/>====<br/>", "console");
    printAsText(pi);

    pi = 333 / 106;
    writeToConsole("333/106<br/>=======<br/>", "console");
    printAsText(pi);

    pi = 355 / 113;
    writeToConsole("355/113<br/>=======<br/>", "console");
    printAsText(pi);

    pi = 52163 / 16604;
    writeToConsole("52163/16604<br/>===========<br/>", "console");
    printAsText(pi);

    pi = 103993 / 33102;
    writeToConsole("103993/33102<br/>============<br/>", "console");
    printAsText(pi);

    pi = 245850922 / 78256779;
    writeToConsole("245850922/78256779<br/>==================<br/>", "console");
    printAsText(pi);
}


function FrancoisViete()
{
    writeToConsole("Francois Viete<br/>==============<br/>", "console");

    let iterations = 28;
    let numerator = 0;
    let pi = 1;

    for(let i = 1; i <= iterations; i++)
    {
        numerator = Math.sqrt(2 + numerator);

        pi*= (numerator / 2);
    }

    pi = (1 / pi) * 2;

    printAsText(pi);
}


function JohnWallis()
{
    writeToConsole("John Wallis<br/>===========<br/>", "console");

    let iterations = 1000000;
    let numerator = 2;
    let denominator = 1;
    let pi = 1;

    for(let i = 1; i <= iterations; i++)
    {
        pi*= (numerator / denominator);

        ((i%2) == 1) ? (denominator+= 2) : (numerator+= 2);
    }

    pi*= 2;

    printAsText(pi);
}


function JohnMachin()
{
    writeToConsole("John Machin<br/>===========<br/>", "console");

    let pi = (4 * Math.atan(1/5) - Math.atan(1/239)) * 4;

    printAsText(pi);
}


function GregoryLeibniz()
{
    writeToConsole("Gregory-Leibniz<br/>===============<br/>", "console");

    let iterations = 400000;
    let denominator = 1;
    let multiplier = 1;
    let pi = (4 / denominator);

    for(let i = 2; i <= iterations; i++)
    {
        pi += ( (4 / (denominator += 2)) * (multiplier *= -1) );
    }

    printAsText(pi);
}


function Nilakantha()
{
    writeToConsole("Nilakantha<br/>==========<br/>", "console");

    let iterations = 1000000;
    let multiplier = -1;
    let start_denominator = 2;
    let pi = 3;

    for(let i = 1; i <= iterations; i++)
    {
        pi += ( (4 / (start_denominator * (start_denominator + 1) * (start_denominator + 2)) ) * (multiplier *= -1));

        start_denominator += 2;
    }

    printAsText(pi);
}
