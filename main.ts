import inquirer from "inquirer";

const para_input = await inquirer.prompt([
    {
    name: "user_input",
    type: "input",
    message: "Type your Paragraph: "
    }
])

function word_counter(para: string){
    let remove_white = para.replace(/\s/g,"")
    return remove_white
}


let total_words = word_counter(para_input.user_input).length;

console.log(total_words);
