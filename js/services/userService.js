class UserService {

    static init(){
      var internetadress = new InternetAdress("http://webservi/antwort.htm?name=Pillepalle&vor=Herbert&B1=Abschicken",)
      document.write("Aufgabe 1:" + "</br>")
      var str = internetadress.internetadress.toString();
      document.write("Wirkung von toString(): " + str + "</br>");
      var len = internetadress.internetadress.length
      document.write("Wirkung von length: " + len + "</br>");
      document.write("Wirkung von charAt(): " + internetadress.internetadress.charAt(29) + "</br>")
      document.write("Wirkung von indexOf(name,0): " + internetadress.internetadress.indexOf("name",0) + "</br>")
      document.write("Wirkung von lastIndexOf(w,0): " + internetadress.internetadress.lastIndexOf("o",8) + "</br>")
      document.write("Wirkung von substring(3,12): " + internetadress.internetadress.substring(3,12) + "</br>")
      document.write("Wirkung von toLowerCase(): " + internetadress.internetadress.toLowerCase() + "</br>")
      document.write("Wirkung von toUpperCase(): " + internetadress.internetadress.toUpperCase() + "</br>")
      document.write("Aufgabe 2:" + "</br>")

      document.write("Der name ist: " + internetadress.internetadress.substring(33,43) + "</br>")

      document.write("Der Vorname ist: " + internetadress.internetadress.substring(48,55) + "</br>")

    }

}
