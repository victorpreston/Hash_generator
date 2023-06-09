function generateHash() {
    var inputText = document.getElementById("input-text").value;
    var hashAlgorithm = document.getElementById("hash-algorithm").value;
    var hashResult = document.getElementById("hash-result");
    
    var hash;
    
    switch (hashAlgorithm) {
      case "sha1":
        hash = sha1(inputText);
        break;
      case "md5":
        hash = md5(inputText);
        break;
      case "md2":
        hash = md2(inputText);
        break;
      case "sha256":
        hash = sha256(inputText);
        break;
      case "sha512":
        hash = sha512(inputText);
        break;
      default:
        hash = "Invalid algorithm";
    }
    
    hashResult.value = hash;
  }
  
  // SHA-1 hashing algorithm implementation
  function sha1(input) {
    var sha1Hash = CryptoJS.SHA1(input);
    return sha1Hash.toString();
  }
  
  // MD5 hashing algorithm implementation
  function md5(input) {
    var md5Hash = CryptoJS.MD5(input);
    return md5Hash.toString();
  }
  
  // MD2 hashing algorithm implementation
  function md2(input) {
    var md2Hash = CryptoJS.MD2(input);
    return md2Hash.toString();
  }
  
  // SHA-256 hashing algorithm implementation
  function sha256(input) {
    var sha256Hash = CryptoJS.SHA256(input);
    return sha256Hash.toString();
  }
  
  // SHA-512 hashing algorithm implementation
  function sha512(input) {
    var sha512Hash = CryptoJS.SHA512(input);
    return sha512Hash.toString();
  }

  function clearHash() {
    document.getElementById("hash-result").value = "";
  }