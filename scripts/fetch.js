let url = "https://fe04156e-b0a5-468a-a569-dab0a548bb56.mock.pstmn.io"
$.getJSON(`${url}/transactions`, (data) => {
  let code = "<ul>";
  data.forEach((datapoint) => {
    code += `<li> ${datapoint.date}
                  ${datapoint.amount}
                  ${datapoint.category}
                  ${datapoint.description}
                  ${datapoint.account} </li>`;
  });
  code += "</ul>";
  $(".mypanel").html(code);
});

console.log(code);