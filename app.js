let message = "hi";

{
  let message = "bye";
}

console.log(message);

// Note:
// One needs
// traceur --block-binding true
// or
// traceur --experimental
// see https://github.com/google/traceur-compiler/wiki/LanguageFeatures#language-features
