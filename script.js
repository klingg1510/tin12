function login()
{ 
  let a = username.value
  let b = password.value
  if (a == "lin.klingg" && b == "lin.klingg2007")
  {
    window.open("home.html")
    document.getElementById(compiler).style.display="block"
  }
  else document.write("Không hợp lệ")
}

