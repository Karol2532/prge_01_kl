import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import serverImage1 from "./zdj1.png"; // Zamień na odpowiednią nazwę pliku
import serverImage2 from "./zdj2.png"; // Zamień na odpowiednią nazwę pliku
import serverImage3 from "./zdj3.png"; // Zamień na odpowiednią nazwę pliku
import serverImage4 from "./zdj4.png";
import serverImage6 from "./zdj5.png";
import serverImage7 from "./zdj6.png";
import serverImage5 from "./2.jpeg";
import backicon from "./back.png";

function About() {
  return (
    <div className="about-container">
      <div className="table-header">
        <h1>O serwerze</h1>
        <div className="buttons">
          <Link to="/">
            <img className="backicon" src={backicon} alt="powrót" />
          </Link>
        </div>
      </div>
      <div className="section">
        <h2>Projekt geoportalu</h2>
        <p>
          Pierwszym elementem do zaprojektowania był ekran startowy, który służy
          jako punkt ładowania serwisu oraz logowania użytkowników. Zamiast
          tradycyjnego formularza logowania, zdecydowaliśmy się na przycisk
          "START", który przenosi użytkowników do dalszych sekcji serwisu. W tym
          miejscu umieszczone są również nazwa serwisu oraz logo, aby
          użytkownicy mieli jasny obraz, z jakiego serwisu korzystają. Dodatkowo
          dodaliśmy przycisk "O serwerze", który kieruje użytkowników do strony
          opisującej szczegóły naszego geoportalu.
        </p>
        <div className="img">
          <img src={serverImage1} alt="homeimage" />
        </div>
      </div>

      <div className="section">
        <h2>Usługi</h2>
        <ul>
          <li>
            <h4>Pracownicy</h4>
            <p>
              Sekcja "Pracownicy" umożliwia szybki dostęp do kompletnych danych
              personalnych pracowników. Możesz przeglądać informacje takie jak
              miejsce zamieszkania, stanowisko oraz przypisane oddziały.
            </p>
          </li>
          <div className="img">
            <img src={serverImage2} alt="serviceimage1" />
          </div>
          <li>
            <h4>Oddziały</h4>
            <p>
              Moduł "Oddziały" pozwala na zarządzanie lokalizacjami Twoich
              oddziałów. Zawiera szczegółowe dane o każdej lokalizacji, w tym
              adresy, liczbę pracowników oraz informacje organizacyjne.
            </p>
          </li>
          <div className="img">
            <img src={serverImage3} alt="serviceimage2" />
          </div>
          <li>
            <h4>Lokalizacja</h4>
            <p>
              Przejście do sekcji "Lokalizacja" umożliwia interaktywne
              przeglądanie mapy z zaznaczonymi lokalizacjami pracowników oraz
              oddziałów. Możesz filtrować dane oraz łatwo poruszać się po mapie.
            </p>
          </li>
        </ul>
        <div className="img">
          <img src={serverImage4} alt="serviceimage3" c />
        </div>
      </div>

      <div className="section">
        <h2>Mapa pracowników i oddziałów</h2>
        <p>
          Po wybraniu usługi "Lokalizacja", użytkownicy przenoszeni są na mapę,
          która domyślnie wyświetla lokalizacje pracowników. Oprócz mapy,
          znajdują się tu przyciski do przełączania pomiędzy mapami pracowników
          i oddziałów oraz opcja filtrowania danych. Zaznaczone dane są
          reprezentowane na mapie za pomocą pinezek.
        </p>
        <div className="img">
          <img src={serverImage5} alt="mapimage" />
        </div>
      </div>

      <div className="section">
        <h2>Baza danych o pracownikach</h2>
        <p>
          Strona zawiera szczegółowe informacje o pracownikach, do której można
          przejść korzystając z przycisku usługi "Pracownicy". Użytkownicy mogą
          przeglądać dane takie jak adresy zamieszkania, stanowiska, oddziały, w
          których pracują, itp. Dodaliśmy również przyciski umożliwiające
          przełączanie się pomiędzy bazami danych pracowników i oddziałów oraz
          przycisk do przenoszenia użytkowników do mapy z lokalizacjami.
        </p>
        <div className="img">
          <img src={serverImage6} alt="workerimage" />
        </div>
      </div>

      <div className="section">
        <h2>Baza danych o oddziałach</h2>
        <p>
          Strona zawiera takie same funkcje jak strona z bazą danych o
          pracownikach, ale dotyczy danych o oddziałach. Zawiera informacje o
          lokalizacji, liczbie pracowników, nazwie itp. Wszystkie przyciski i
          funkcje działają w taki sam sposób, jak na stronie o pracownikach.
        </p>
        <div className="img">
          <img src={serverImage7} alt="workplaceimage" />
        </div>
      </div>

      <div className="section">
        <h2>Kontakt</h2>
        <ul>
          <li>
            <p>Tel. +48 542 895 751</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>E-mail interspecialist@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
