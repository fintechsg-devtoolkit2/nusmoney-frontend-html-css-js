var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

let url = "https://fe04156e-b0a5-468a-a569-dab0a548bb56.mock.pstmn.io"

function tabulateResult(data) {
    let code = "<ul>";
    Array.from(data).forEach((datapoint) => {
      code += `<li> ${datapoint.date}
                    ${datapoint.amount}
                    ${datapoint.category}
                    ${datapoint.description}
                    ${datapoint.account} </li>`;
    });
    code += "</ul>";
/*    $(".mypanel").html(code); */
    
    console.log(code);
}

fetch(`${url}/transactions?start-date=1/8/2022&end-date=31/8/2022`, requestOptions)
  .then(response => response.text())
  .then(result => tabulateResult(result.data))
  .catch(error => console.log('error', error));

