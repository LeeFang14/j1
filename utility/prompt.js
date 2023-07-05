import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

export function askQuestion(question) {
  return promptSync({ sigint: true })(question);
}
