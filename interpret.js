var vocab = {
"hi": "friendlygreeting"
"hello": "friendlygreeting"
"calculator": "noun"
}


function understand(arr) {
words = arr.split(" ")
for (var i = 0; i < words.length; i++) {
  if (vocab[words[i]] !== undefined) {
  alert(vocab[words[i]])
  } else {
    alert(words[i])
  }
 }
}
