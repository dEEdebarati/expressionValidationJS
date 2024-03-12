document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
    const type = e.submitter.dataset.type;
    const input = document.getElementById(`${type}Input`).value.trim();
    let temp;
    switch(type){
        case 'email':
            temp = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
            break;
            case 'postal':
                temp=/^\d{4}$/;
                break;
            case 'phone':
                temp = /^01[0-9]{9}$/;
                break;
            default:
                return;
    }
    let isValid = temp.test(input);
    let finalResult = document.getElementById("result");
    finalResult.textContent = isValid?"Valid Expression":"Invalid expression";
})