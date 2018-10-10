/****Regex****/

function reg1(valeur) {
  var reg = new RegExp ('^\\d+$');
  return reg.test(valeur)
}

/**Formulaire**/

function button(){
  var lastnameElt = document.getElementById("lastname").value;
  var firstnameElt = document.getElementById("firstname").value;
  var cityElt = document.getElementById("city").value;

  if(reg1(firstnameElt) == false && reg1(lastnameElt) == false && reg1(cityElt) == false){
  alert("Nom :"+lastnameElt+"\nPrénom :"+firstnameElt+"\nVille :"+cityElt);

}else{
  alert("Les chiffres ne sont pas autorisés");
}
}
