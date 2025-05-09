// Bewerbungsvorlage als HTML-String
export const bewerbungHtml = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Deckblatt - Bewerbung</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100vh;
      width: 100vw;
      font-family: "Source Sans Pro";
      background-color: #ffffff;
    }

    .page {
      width: 85%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      box-sizing: border-box;
      position:relative;
    }
    #cover{

    .title{
        text-align: center;
        width:100%;
        padding:1%;
        padding-bottom:3%;
        border-style:solid;
        border-width:0px 0px 1px 0px;
        border-color:#7a97c9;
        font-size:1.6em;
    }
    #cover-name{
        width:100%;
        text-align: center;
        margin-top:5%;
        margin-bottom:5%;
        font-size:1.6em;
    }
 
    #cover-main{
        display:flex;
        border-style:solid;
        border-width:1px 0px 1px 0px;
        border-color:#7a97c9;
        display:flex;
        align-items: center;
        justify-content: center;
        padding:3%;
        width:100%;
        height:fit-content;
  
    }

    section{
        display:flex;
        flex-direction:column;
      
    }
    #cover-section-left{
 
       
        text-wrap:nowrap;
        text-align: right;
        padding-right:1%;
        
    }
    .contact{
        border-style:solid;
        border-width:0px 1px 0px 0px;
        border-color:#7a97c9;
        padding-right:4%;
    }
    #cover-section-right{

        display:flex;
        flex-direction:column;
        align-items:center;
        border-style:solid;
        border-width:0px 0px 0px 1px;
        border-color:#7a97c9;
        padding:3%;
 
    }
    #cover-social-links{
        margin-top:2%;
        width:100%;
        padding-right:3%;
    display:flex;
    justify-content: center;
    text-align:center;
        a{
            border-style:solid;
            border-width:1px;
            border-color:#7a97c9;
            color:black;
            padding:1%;
            margin-right:5%;
            width:100%;
        }
        a:visited{
           
            color:black;
        }

    }
    #cover-social-links a:hover {
  background-color: black;
  color: white;
}
    #mystreet{
        margin-right:5.5px;
    }
    .jump-links{
        width:75%;
        margin-top:auto;
        margin-bottom:auto;
        h3{
            text-align: center;
            margin-top:10%;
            margin-bottom:4%;
        }
        ul {


  list-style-type: none;
  padding: 0;
  margin: 0;
}

ul li {
  height: 2em;
  display: flex;
  align-items: center;
}

ul li:nth-child(odd) {
  background-color: #f0f0f0; 
}

ul li a {
  padding: 1%;
  margin-left: 1%;
  width: 100%;
 
  color: inherit;
  display: block;
}
      
    }

#vorwort{
    margin-top:10%;
}

#music{
    
    text-align:center;
    color:#383838da;
    margin-top:auto;
    margin-bottom:0%;
    p{
        color:#383838da;
    }

}
#music-link{
 
        text-decoration: none;
        color:#383838da;;
        img{
            width:16px;
            opacity: 0.4;
        }
    }
    }
    #briefkopf-meine-adresse{
      
        margin-bottom:10%;
        text-align:right;
    }
    #briefkopf-firma{
       
        margin-bottom:22px;
    }
    #Briefdatum{
  
        text-align:right;
        margin-bottom:22px;
}
   #anschreiben{
   
    main{
        margin-top:-16px;
        padding:2%;
    }
    svg{
    margin-top:-2%;
    margin-left:30%;
    width:5.5em;
    height:auto;
    overflow:hidden;
}
    #letter-unterschrift{
      margin-top:-2%;
       svg{
        position:absolute;

        left:0%;
    
    }
   }}
   #cv{
    h1{
        margin-top:-6px;
    }
    .contact-flex-row{
        display:flex;
        border-style:solid;
        border-width:1px 0px 1px 0px;
        border-color:#7a97c9;
    }
    #cv-contact{
        display:flex;
        flex-direction: column;
        width:100%;
        text-align:right;

    }
    #ausbildung{
        width:97%;
        background-color: rgba(86, 135, 175, 0.185);
        padding-left:3%;
        padding-bottom:0%;
        border-radius:1%;
        border-style:solid;
        border-width:1.5px 1.5px 0px 1.5px;
        border-color:#7a97c9;
        border-radius:1%;
    }
    #Berufserfahrung{
        display:flex;
        flex-direction: column;
        width:100%;
        border-style:solid;
        border-width:1px;
        border-radius:1%;
        border-color:#7a97c9;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.589);
        div{
            padding-left:3%;
            padding-bottom:0%;
            border-style:solid;
            border-color:#7a97c9;
            border-width:1px;
            border-radius:1%;
        }
    }
    #Berufserfahrung div:nth-child(even){
        background-color: rgba(86, 135, 175, 0.212);
    }
    svg{
    margin-top:-2%;
    margin-left:30%;
    width:5.5em;
    height:auto;
    overflow:hidden;
}
    #cv-unterschrift{
        align-self:flex-start;
        
        svg{
           position:absolute;
           left:0%;
        }
    }
   }
   #Projektbeispiele{
    h1{
        width:100%;
        text-align: center;
        margin-top:-1%;
        border-style:solid;
        border-width:0px 0px 1px 0px;
        border-color:#7a97c9;
    }

    #web-development{
        margin-top:-4%;
    }
    #percurio-preview-img{
        width:10em;
    }
    #vpd-preview{
        width:10em;
    }
    .embedded-images{
        display:flex;
        align-items:center;
        justify-content:center;
        margin-left:auto;
        margin-right:auto;
    }
    img{
        margin:1%;
        max-width: 30%;
        margin-top:-1%;
    }
   }
   #grone-brief{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
   }
   #zeugnis{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
   }
#letter{
    width:100%;
    height:auto;
}

#pageCorner{
    width:4em;
    height:4em;
    position:absolute;
    border-radius:100%;
    background-color:blue;
}
#contact-phrase{
    i{
        filter:grayscale(100%)
    }
}
#cv-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 1rem;
  text-align: left;
  margin-bottom:10%;
}

#cv-table th, #cv-table td {
  border: none; /* Entfernt die Ränder */
  padding: 0.5rem;
  height: 4rem;
  vertical-align: middle; /* Zentriert den Text vertikal */
}

#cv-table thead {
  background-color: #f0f0f0;
  font-weight: bold;
}

#cv-table tbody tr:nth-child(odd) {
  background-color: rgba(86, 135, 175, 0.1);
}

#cv-table tbody tr:hover {
  background-color: rgba(86, 135, 175, 0.2);
}

.education-highlight {
    text-align:start;
  background-color: rgba(173, 216, 230, 0.3); /* Heller Blauton */
  border-left: 4px solid #7a97c9; /* Farblicher Akzent */
}

.education-highlight td {
  font-weight: bold; /* Optional: Text hervorheben */
}
#my-street{
  margin-right:10px;
}

  </style>
</head>
<body>
    <div class="page" id="cover">
          <div class="title">Bewerbung um ein kostenneutrales Praktikum als Fachinformatiker für Anwendungsentwicklung</div>
          <div id="cover-name">Marius Erpenbach</div>
          <main id="cover-main">
          <section  id="cover-section-left">
             
              <div class="contact" style="filter: grayscale(100%);">
                  <h3>About me</h3>
             
      
                  <p>Marius Erpenbach</p>
                  <p>Geb. 06.11.1994 Dormagen</p>
                  <p id="my-street">Joseph-Pannenbecker-Straße 17 🏠</p>
                  <p>41515 Grevenbroich 🌐</p>
                  <p>+49 2181 7288737 ☎</p>
                  <p>marius.erpenbach@erp-it.net 📫 </p>
              </div>
              <div id="cover-social-links"> 
                  <a href="https://github.com/mariusErpenbach" target="_blank">GitHub</a>
                  <a href="https://www.linkedin.com/in/marius-erpenbach-292107297/" target="_blank">LinkedIn</a>
                </div>
          </section>
            <section id="cover-section-right">
              <!-- <img class="photo" src="https://uploads.erp-it.net/images/meye.jpg" alt="Bewerbungsfoto" /> -->
            </section>
          </main>
        
              <div class="jump-links">
                  <h3>Inhalt</h3>
                  <ul>
                    <li>              <a href="#grone-brief"> 1. Informationsbrief meines Bildungsträgers</a>
                    </li>
                      <li>              <a href="#anschreiben">2. Anschreiben</a>
                      </li>
                      <li>              <a href="#cv">3. Lebenslauf</a>
                      </li>
                      <li>              <a href="#Projektbeispiele">4. Projektbeispiele</a>
                      </li>
                      <li>              <a href="#zeugnis">5. Zeugnis</a>
                      </li>
                  </ul>
              </div> 
             
              <p id="music">Empfohlene musikalische Begleitung:</p>
              <a id ="music-link"href="https://www.youtube.com/watch?v=Mu5dkDu0MG4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" />
                   Claude Debussy: Rêverie (Philharmonic Symphony Of London)</a>
          </div>
      </div>
      <div class="page" id="grone-brief">
        <!-- <img id="letter" src="/home/dci/Desktop/Github/bewerbungshelper/assets/yp.png" alt="yeee"> -->
      </div>

      <div class="page" id="anschreiben">
                     
                     
     
          <main>
            
  <p>
    <div id="briefkopf-meine-adresse">
        <p>
            Marius Erpenbach <br/>
            Joseph-Pannenbecker-Straße 17 <br/>
            41515 Grevenbroich <br/>
            Tel: 02181 7288737 <br/>
            Email: Marius.Erpenbach@erp-it.net
        </p>
    </div>
    <div id="briefkopf-firma">
        <p>TDA-HR-Software-Entwicklungs GmbH<br/>
            Frau Beck <br/>
            Schloß Hülchrath 1 - Vorburg<br/>
            41516 Grevenbroich</p>
    </div>
    <div id="Briefdatum">Grevenbroich, 8. Mai 2025</div>
   <strong>Bewerbung um ein kostenneutrales Praktikum „Fachinformatiker für Anwendungsentwicklung“</strong>
</p>
<p>Sehr geehrte Frau Beck,</p> 
  <p>
    seit rund sechs Jahren programmiere ich mit großer Leidenschaft und habe mir in dieser Zeit ein
    tiefes Verständnis für die Denkprozesse und Logiken der Softwareentwicklung angeeignet. Daher
    befinde ich mich derzeit in einer Umschulung zum Fachinformatiker für Anwendungsentwicklung und
    möchte mein Wissen professionalisieren und meine Fähigkeiten gezielt in Ihrem Unternehmen
    einsetzen.  </p>
  
  <p>
    Ich verfüge über Kenntnisse in der Webentwicklung, insbesondere mit JavaScript, React und Next.js.
    Diese Technologien habe ich in mehreren Projekten eingesetzt, wodurch ich mich schnell in moderne
    Frontend-Architekturen und bestehende Codebasen einarbeiten kann.
    Im Bereich der Desktopentwicklung arbeite ich privat am liebsten mit C# und Avalonia. Ich entwickle
    gerne schlanke, benutzerfreundliche Anwendungen und nutze Python oft als flexiblen Helfer für
    Mini-Tools oder zum schnellen Testen von Ideen. Auch im Bereich der Embedded-Programmierung
    bringe ich praktische Erfahrung mit, vor allem mit C++. Dieses Feld fasziniert mich durch die Nähe zur
    Hardware und die besondere Herausforderung, effiziente und stabile Software für
    ressourcenbeschränkte Systeme zu entwickeln. Für die Bereitstellung von APIs oder als lokale
    Schnittstelle habe ich ergänzend auch mit Python und Flask gearbeitet.    </p>
  
  <p> 
    Zusätzlich engagiere ich mich auch über den offiziellen Unterricht hinaus: Gemeinsam mit einigen
    Mitschülern arbeite ich fast täglich nach dem regulären Unterricht für mehrere Stunden im virtuellen
    Klassenraum weiter – sei es an Gruppenprojekten oder indem ich anderen beim Programmieren
    helfe. Dieses Engagement fördert nicht nur unsere Lerngemeinschaft, sondern schärft auch meine
    Fähigkeit, komplexe Sachverhalte strukturiert zu vermitteln. </p>             
  
  <p>
    Neben meinen technischen Fähigkeiten bringe ich eine hohe Anpassungsfähigkeit und ausgeprägte
    Problemlösungskompetenz mit. Meine bisherigen beruflichen Erfahrungen in verschiedenen
    Branchen haben mich gelehrt, flexibel und strukturiert zu arbeiten. Ich bin überzeugt, dass ich mit
    diesem Hintergrund eine wertvolle Unterstützung für Ihr Team sein kann.  
  <p>
    Ich freue mich darauf, Sie in einem persönlichen Gespräch kennenzulernen.  </p>
  <br/>
  <p id="letter-unterschrift">Mit freundlichen Grüßen<br/>
    Marius Erpenbach<br/> 
 <svg
 width="185.82991mm"
 height="154.46651mm"
 viewBox="0 0 185.82991 154.46651"
 version="1.1"
 id="svg1"
 xmlns="http://www.w3.org/2000/svg"
 xmlns:svg="http://www.w3.org/2000/svg">
<defs
   id="defs1" />
<path
   style="opacity:0.4;fill:#000000;stroke:#000000;stroke-width:0.264583;stroke-opacity:1"
   id="path46"
   d="m 52.951257,86.935459 c -0.393713,-0.15015 -0.781516,-0.31684 -1.181142,-0.45046 -1.500563,-0.50177 -3.024164,-0.93201 -4.541102,-1.38184 -3.030543,-0.89867 -6.07323,-1.73456 -9.132665,-2.52831 -1.540703,-0.38445 -3.101761,-0.78951 -4.656175,-1.12357 -1.182497,-0.25414 -2.245537,-0.49847 -3.46348,-0.4525 -1.4146,0.0534 -1.864963,0.30741 -3.188555,0.74765 -0.49766,0.28027 -1.028467,0.50848 -1.492977,0.84081 -2.050643,1.46712 -3.465428,4.16088 -4.12791,6.54588 -0.180954,0.65145 -0.249733,1.32897 -0.374597,1.99345 -0.03199,1.53278 -0.211881,2.35015 0.384011,3.80475 0.550709,1.3443 1.475218,2.35601 2.73073,3.09366 4.953571,2.910361 4.282392,2.514021 8.462327,3.638801 1.004059,0.16008 1.99853,0.401 3.012178,0.48024 2.922125,0.22842 6.158569,-0.0747 8.594513,-1.88866 2.500223,-1.861791 3.129656,-3.557181 4.757121,-6.230791 1.576531,-4.44042 2.601344,-6.72989 3.371083,-11.4969 0.811376,-5.02487 0.832083,-9.37361 0.05098,-14.43688 -1.144566,-7.41932 -2.587861,-10.44206 -5.090568,-17.60497 -6.12536,-14.82015 -13.98349,-28.83549 -21.973052,-42.7114398 -0.663292,-1.11404 -1.312739,-2.23643 -1.989879,-3.3421 -0.94838,-1.54857 -2.546125,-4.92612998 -5.29849,-3.72951998 -0.686215,0.29833998 0.568135,1.38510998 0.884978,2.06296998 0.479611,1.02611 1.002388,2.03148 1.50358,3.04721 5.540764,10.1176398 11.602545,19.9392298 17.661945,29.7514698 6.163456,9.69666 11.981429,19.60257 17.754338,29.53414 4.179234,6.95235 7.763989,14.23313 11.510603,21.42091 3.12798,5.88318 6.387046,11.69266 9.624813,17.515251 3.133439,5.43841 -0.39788,-0.6658 2.327949,3.98004 0.23799,0.40564 0.47309,0.81305 0.70204,1.22387 0.11142,0.19994 0.19415,0.41623 0.31893,0.60812 0.0198,0.0305 -0.0283,-0.12142 0.006,-0.10881 1.07522,0.39764 2.1254,0.85999 3.18809,1.28998 -3.11827,-3.96866 -5.381429,-8.52335 -7.690802,-12.986411 -3.763669,-7.72229 -7.073342,-15.6531 -10.477799,-23.53709 -2.445112,-5.74991 -4.512331,-11.6507 -6.436812,-17.59226 -1.448697,-4.79808 -2.852288,-9.60971 -4.31967,-14.40227 -0.843407,-2.71403 -1.597697,-5.4492 -2.235597,-8.21817 -0.424399,-1.61864 0.03084,-2.18645 -3.664764,-1.79637 -0.463834,0.049 0.283797,0.88887 0.443391,1.32713 0.816509,2.24219 0.900755,2.29994 1.974887,4.69836 3.163586,6.53181 6.885093,12.7713 10.562185,19.02173 3.976531,6.71299 9.174099,12.56678 14.478786,18.2438 3.604125,3.73577 7.180275,7.50274 11.016815,11.00392 3.14407,2.86924 4.3505,3.81406 7.71394,6.63089 6.209886,5.18373 12.604956,10.148101 19.158676,14.889561 1.66811,1.17447 0.90461,0.62997 2.29346,1.62938 0,0 3.54265,1.39817 3.54265,1.39817 v 0 c -1.49273,-1.04667 -0.67286,-0.47925 -2.46393,-1.69602 -6.74638,-4.73655 -13.29974,-9.752871 -19.620286,-15.044641 -3.08604,-2.61033 -4.65007,-3.87532 -7.56309,-6.54917 -3.80524,-3.4928 -7.33721,-7.26288 -10.94664,-10.95324 -5.318374,-5.64534 -10.519064,-11.46957 -14.494838,-18.16889 -3.665048,-6.20593 -7.375462,-12.40758 -10.460024,-18.92885 -0.981091,-2.33025 -1.070224,-2.3795 -1.769372,-4.55845 -0.131046,-0.40841 -0.02143,-0.9639 -0.351475,-1.23784 -1.102569,-0.91515 -2.507539,-1.38981 -3.724889,-2.14559 -0.05621,-0.0349 0.1285,-0.0315 0.192749,-0.0473 0.07269,0.20852 0.145383,0.41704 0.218075,0.62556 0.605157,2.19149 -0.08955,-0.37503 0.572034,2.26992 0.510088,2.03926 1.211951,4.02408 1.806612,6.03899 1.532506,4.80598 3.000158,9.6319 4.445429,14.46464 1.906635,5.99238 4.06306,11.90724 6.551051,17.68419 3.481382,7.85647 6.829055,15.77326 10.473751,23.55621 2.176992,4.395831 4.348371,8.828641 7.175417,12.853821 1.30482,0.71603 2.57589,1.49734 3.91446,2.1481 0.0687,0.0334 0.0702,-0.15554 0.0399,-0.22566 -0.10346,-0.23939 -0.28286,-0.43822 -0.42208,-0.65874 -1.10194,-1.74538 -2.21312,-3.48604 -3.23205,-5.28198 C 76.685351,99.648699 73.36184,93.828039 70.208441,87.910519 66.427428,80.684009 62.821052,73.357609 58.544203,66.402839 52.6544,56.483849 46.79294,46.545939 40.63267,36.790979 c -0.520319,-0.83627 -6.042003,-9.70506 -6.494385,-10.45625 -1.080434,-1.7941 -2.116757,-3.6144 -3.171397,-5.42378 -2.624904,-4.50338 -5.291806,-8.99103 -7.615536,-13.6607598 -0.446069,-0.98335 -0.913664,-1.95723 -1.338209,-2.95007 -0.26224,-0.61327 -0.240361,-1.40433 -0.721353,-1.86642 -1.020855,-0.98071 -2.343779,-1.59659998 -3.587387,-2.27289998 -0.312587,-0.16999 0.547375,0.46195 0.769072,0.74025 1.228731,1.54249998 2.762697,4.06432998 3.744553,5.59739998 5.057714,8.3198598 9.949304,16.7214198 14.413515,25.3789198 1.456802,2.82519 2.921553,5.64826 4.265248,8.52896 1.387147,2.97387 2.616218,6.01894 3.924329,9.02841 2.465779,7.24063 3.780414,9.93141 4.84119,17.40713 1.001006,7.05449 0.412263,13.57428 -1.746348,20.33684 -0.564404,1.76817 -1.358937,3.45446 -2.038406,5.18169 -1.690029,2.58019 -2.346201,4.18915 -4.845825,5.95536 -2.429505,1.716671 -5.593517,1.979431 -8.458179,1.716321 -1.008946,-0.0927 -1.997011,-0.343801 -2.995517,-0.515691 -0.961737,-0.28008 -1.885259,-0.78126 -2.88521,-0.84024 -0.308602,-0.0182 0.87557,0.84936 0.601909,0.70556 -1.796981,-0.94425 -2.996989,-2.58493 -3.258601,-4.59924 -0.08269,-0.63672 0.0041,-1.28413 0.0061,-1.92619 0.112834,-0.64674 0.167592,-1.30635 0.3385,-1.94022 0.630428,-2.33816 1.998789,-4.89628 4.039258,-6.28936 0.455597,-0.31105 0.974813,-0.51674 1.46222,-0.77511 1.331196,-0.40493 1.690294,-0.61627 3.100684,-0.63668 2.583117,-0.0374 5.388779,1.0356 7.901731,1.49533 3.076482,0.79203 6.128903,1.63538 9.164383,2.57428 0.937898,0.2901 3.646938,1.14472 4.698077,1.54802 0.422092,0.16195 0.824616,0.37091 1.236924,0.55636 z" />
<circle
   id="path47"
   style="fill:#000000;stroke:#000000;stroke-width:0.264583"
   cx="119.2177"
   cy="112.02531"
   r="0.042978346" />
<circle
   id="path54"
   style="fill:#000000;stroke:#000000;stroke-width:0.264583"
   cx="117.28172"
   cy="110.73465"
   r="0.042978346" />
<path
   style="opacity:0.4;fill:#241f1c;stroke:#000000;stroke-width:0.264583;stroke-opacity:1"
   id="path55"
   d="m 111.73974,106.6983 c -2.3618,-1.34051 -4.85181,-2.46299 -7.45342,-3.25446 -0.61273,-0.18641 -1.23735,-0.3312 -1.85603,-0.4968 -2.873396,-0.6677 -5.899576,-0.84602 -8.796586,-0.19832 -0.46747,0.10451 -0.92268,0.25782 -1.38402,0.38673 -0.40361,0.14495 -0.82472,0.24822 -1.21083,0.43486 -1.65793,0.80141 -2.69892,2.37156 -3.20993,4.10001 -0.15124,0.51154 -0.22252,1.0434 -0.33378,1.5651 0.008,0.57723 -0.0564,1.16004 0.0241,1.7317 0.38805,2.75727 2.28159,5.20447 4.29166,7.01436 0.63218,0.56921 1.33149,1.0591 1.99724,1.58866 3.14498,2.45352 6.731116,4.21968 10.153386,6.23175 1.28365,0.7547 -2.63023,-1.40804 -3.86392,-2.24191 -3.818576,-0.61381 -7.627416,-1.32857 -11.472576,-1.76402 -2.23409,-0.25301 -2.65204,-0.23414 -4.77013,-0.31665 -1.05204,0.0508 -3.15782,0.11538 -3.66499,1.39968 -0.46143,1.16849 0.0714,2.83874 0.66282,3.78477 0.65119,1.04157 1.56236,1.89598 2.34353,2.84397 1.49904,1.15438 2.90048,2.44804 4.49712,3.46314 2.95406,1.87811 6.00114,3.61828 9.12518,5.19756 6.086736,3.07699 13.441306,5.71246 19.883516,7.70457 4.14035,1.28031 8.3196,2.44164 12.52865,3.47388 4.32278,1.06016 8.70376,1.86704 13.05565,2.80054 9.26715,1.29278 14.05951,2.37979 23.24949,2.15789 2.93255,-0.0708 5.89713,-0.23384 8.75421,-0.89863 3.92881,-0.91417 8.40324,-2.94868 10.32619,-6.86317 0.87847,-1.78827 0.71885,-3.9194 1.07827,-5.8791 -0.63531,-2.45131 -0.89766,-5.03103 -1.90594,-7.35394 -2.89021,-6.65857 -8.34286,-13.28216 -13.16665,-18.44625 -7.58361,-8.11861 -15.99632,-15.265521 -24.77396,-22.053481 -5.06763,-3.91892 -10.35909,-7.53954 -15.53864,-11.30931 -14.39543,-9.48154 -18.30631,-12.3703 -33.222876,-20.95246 -5.68438,-3.27047 -11.45354,-6.39362 -17.25051,-9.4601 -8.02189,-4.24342 -20.080559,-10.24442 -28.600375,-13.93605 -3.901612,-1.69057 -7.902405,-3.14234 -11.853608,-4.71351 -8.870204,-3.19178 -17.952424,-5.78989 -27.294467,-7.14147 -5.2821766,-0.76421 -6.6277146,-0.68036 -11.66359956,-0.83784 0,0 2.57309896,1.87797 2.57309896,1.87797 v 0 c 4.870158,0.0564 6.167743,-0.0571 11.2898236,0.61586 9.121468,1.19848 17.991097,3.67478 26.659069,6.71397 3.866608,1.50876 7.781452,2.89931 11.599823,4.52629 8.694047,3.70447 19.846496,9.2174 28.076085,13.52808 5.25884,2.7546 10.49689,5.5538 15.6449,8.51035 14.955626,8.58913 18.758736,11.41855 33.158256,20.91854 5.10875,3.73909 10.33448,7.32338 15.32626,11.21726 8.50839,6.63703 16.73083,13.732621 24.0262,21.710501 4.66172,5.09785 9.76223,11.48145 12.47818,18.01871 0.93842,2.25874 1.15863,4.75265 1.73794,7.12898 -0.34225,1.90462 -0.20148,3.96354 -1.02676,5.71386 -1.81598,3.8515 -5.95135,5.95004 -9.81124,6.95212 -2.7533,0.7148 -5.62533,0.94417 -8.4675,1.06101 -9.09554,0.37393 -13.68608,-0.69422 -22.88805,-1.93501 -4.36117,-0.94548 -8.75447,-1.75334 -13.08352,-2.83643 -7.80129,-1.95185 -16.43467,-4.62288 -23.93423,-7.62424 -2.50701,-1.00332 -9.954656,-4.25924 -13.191516,-6.43011 -1.48278,-0.99445 -2.82453,-2.18455 -4.23679,-3.27682 -1.53065,-1.84665 -2.47519,-2.40688 -2.95014,-4.63055 -0.0934,-0.43716 -0.11361,-0.92243 0.0452,-1.34031 0.42371,-1.11519 2.49176,-1.17802 3.3648,-1.23667 0.68469,0.0164 1.37023,0.0113 2.05407,0.0492 4.8196,0.26707 9.57259,1.23537 14.298216,2.16087 2.73591,-0.47468 1.57174,0.0338 -2.1563,-2.4248 -0.65543,-0.43224 1.42995,0.69619 2.01482,1.21998 0.5144,0.4607 -1.20733,-0.67119 -1.79922,-1.02689 -2.005566,-1.20527 -2.131206,-1.34688 -4.077966,-2.71516 -0.65944,-0.51051 -1.35011,-0.98305 -1.97832,-1.53154 -1.93151,-1.68641 -3.90075,-4.11024 -4.32239,-6.72135 -0.0875,-0.54169 -0.0315,-1.09697 -0.0472,-1.64546 0.10856,-0.49985 0.17875,-1.0096 0.32568,-1.49955 0.68913,-2.29798 1.96864,-3.54113 4.23666,-4.23806 0.4479,-0.12263 0.88979,-0.26985 1.34371,-0.36789 2.86144,-0.61808 5.830026,-0.397 8.654446,0.29482 0.61307,0.17156 1.23206,0.3232 1.8392,0.51468 2.66238,0.83969 5.1826,2.04694 7.59966,3.43302 z" />
</svg></p>

          </main>
  
      </div>
      <div class="page" id="cv">
          <h1>Lebenslauf</h1>
          <div class="contact-flex-row">
              <section class="info">
                  <h4>Fähigkeiten</h4>
                  <p><strong>Model-Languages:</strong> HTML, XAML</p>
                  <p><strong>Script Languages:</strong> JavaScript (TypeScript), Python, C#</p>
                  <p><strong>Frameworks:</strong> React, Next.js, Django, Flask, Avalonia</p>
              </section>
              <section id="cv-contact">
                  <h3>Marius Erpenbach</h3>
                  <p id="contact-phrase">
                  Geb. 06.11.1994 Dormagen<br/>
                  Joseph-Pannenbecker-Straße 17 <i>🏠</i><br/> 
                  41515 Grevenbroich <i>🌐</i><br/>
                  +49 163 4228181 <i>☎</i><br/>
                  marius_erpenbach@web.de <i>📫</i></p>
                  <p class="link">
                      GitHub: <a href="https://github.com/mariusErpenbach">github.com/mariusErpenbach</a><br/>
                      LinkedIn: <a href="https://www.linkedin.com/in/marius-erpenbach-292107297/">linkedin.com/in/marius-erpenbach</a>
                  </p>
              </section>    
              </div>
          <h3>Erfahrung</h3>
          <table id="cv-table">
  
  <tbody>
    <tr class="education-highlight">
  <td style="text-align:start;">Seit 01.2025</td>
  <td><strong>Umschulung zum Fachinformatiker für Anwendungsentwicklung <br/>Grone Bildungszentren NRW Rheinland gGmbH, Neuss</strong></td>
  
</tr>
    <tr>
      <td>01.2021 – 03.2024</td>
      <td>Montagehelfer 
        <br/> Türenbau Behrens, Monheim</td>
   
    </tr>
    <tr>
      <td>05.2019 – 01.2021</td>
      <td>Berufliche Umorientierung <br/>
        <i>- Unfallbedingte Krankheitszeit mit vollständiger Genesung -</i></td>

    </tr>
    <tr>
      <td>10.2018 – 05.2019</td>
      <td>Gerüstbauer <br/>Gerüstbau Pesch, Rommerskirchen</td>
    
    </tr>
    <tr>
      <td>08.2015 – 08.2018</td>
      <td>Fleischer <br/> 
        Fleischerei Pick & Goertz, Jüchen</td>

    </tr>
    <tr>
      <td>02.2014 – 02.2015</td>
      <td>Lagerhelfer<br/>
         Werbetechnik Heinen, Frechen</td>
    </tr>
    <tr class="eduction-school">
      <td>06.2012</td>
      <td>Schulabschluss<br/> 
         Fachoberschulreife</br>
         Heinrich-Corsten Schule, Mönchengladbach</td>
        </td>
    </tr>
  </tbody>
</table>

   <p id="cv-unterschrift">Grevenbroich, 8. Mai 2025 <svg
    width="185.82991mm"
    height="154.46651mm"
    viewBox="0 0 185.82991 154.46651"
    version="1.1"
    id="svg1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg">
   <defs
      id="defs1" />
   <path
      style="opacity:0.4;fill:#000000;stroke:#000000;stroke-width:0.264583;stroke-opacity:1"
      id="path46"
      d="m 52.951257,86.935459 c -0.393713,-0.15015 -0.781516,-0.31684 -1.181142,-0.45046 -1.500563,-0.50177 -3.024164,-0.93201 -4.541102,-1.38184 -3.030543,-0.89867 -6.07323,-1.73456 -9.132665,-2.52831 -1.540703,-0.38445 -3.101761,-0.78951 -4.656175,-1.12357 -1.182497,-0.25414 -2.245537,-0.49847 -3.46348,-0.4525 -1.4146,0.0534 -1.864963,0.30741 -3.188555,0.74765 -0.49766,0.28027 -1.028467,0.50848 -1.492977,0.84081 -2.050643,1.46712 -3.465428,4.16088 -4.12791,6.54588 -0.180954,0.65145 -0.249733,1.32897 -0.374597,1.99345 -0.03199,1.53278 -0.211881,2.35015 0.384011,3.80475 0.550709,1.3443 1.475218,2.35601 2.73073,3.09366 4.953571,2.910361 4.282392,2.514021 8.462327,3.638801 1.004059,0.16008 1.99853,0.401 3.012178,0.48024 2.922125,0.22842 6.158569,-0.0747 8.594513,-1.88866 2.500223,-1.861791 3.129656,-3.557181 4.757121,-6.230791 1.576531,-4.44042 2.601344,-6.72989 3.371083,-11.4969 0.811376,-5.02487 0.832083,-9.37361 0.05098,-14.43688 -1.144566,-7.41932 -2.587861,-10.44206 -5.090568,-17.60497 -6.12536,-14.82015 -13.98349,-28.83549 -21.973052,-42.7114398 -0.663292,-1.11404 -1.312739,-2.23643 -1.989879,-3.3421 -0.94838,-1.54857 -2.546125,-4.92612998 -5.29849,-3.72951998 -0.686215,0.29833998 0.568135,1.38510998 0.884978,2.06296998 0.479611,1.02611 1.002388,2.03148 1.50358,3.04721 5.540764,10.1176398 11.602545,19.9392298 17.661945,29.7514698 6.163456,9.69666 11.981429,19.60257 17.754338,29.53414 4.179234,6.95235 7.763989,14.23313 11.510603,21.42091 3.12798,5.88318 6.387046,11.69266 9.624813,17.515251 3.133439,5.43841 -0.39788,-0.6658 2.327949,3.98004 0.23799,0.40564 0.47309,0.81305 0.70204,1.22387 0.11142,0.19994 0.19415,0.41623 0.31893,0.60812 0.0198,0.0305 -0.0283,-0.12142 0.006,-0.10881 1.07522,0.39764 2.1254,0.85999 3.18809,1.28998 -3.11827,-3.96866 -5.381429,-8.52335 -7.690802,-12.986411 -3.763669,-7.72229 -7.073342,-15.6531 -10.477799,-23.53709 -2.445112,-5.74991 -4.512331,-11.6507 -6.436812,-17.59226 -1.448697,-4.79808 -2.852288,-9.60971 -4.31967,-14.40227 -0.843407,-2.71403 -1.597697,-5.4492 -2.235597,-8.21817 -0.424399,-1.61864 0.03084,-2.18645 -3.664764,-1.79637 -0.463834,0.049 0.283797,0.88887 0.443391,1.32713 0.816509,2.24219 0.900755,2.29994 1.974887,4.69836 3.163586,6.53181 6.885093,12.7713 10.562185,19.02173 3.976531,6.71299 9.174099,12.56678 14.478786,18.2438 3.604125,3.73577 7.180275,7.50274 11.016815,11.00392 3.14407,2.86924 4.3505,3.81406 7.71394,6.63089 6.209886,5.18373 12.604956,10.148101 19.158676,14.889561 1.66811,1.17447 0.90461,0.62997 2.29346,1.62938 0,0 3.54265,1.39817 3.54265,1.39817 v 0 c -1.49273,-1.04667 -0.67286,-0.47925 -2.46393,-1.69602 -6.74638,-4.73655 -13.29974,-9.752871 -19.620286,-15.044641 -3.08604,-2.61033 -4.65007,-3.87532 -7.56309,-6.54917 -3.80524,-3.4928 -7.33721,-7.26288 -10.94664,-10.95324 -5.318374,-5.64534 -10.519064,-11.46957 -14.494838,-18.16889 -3.665048,-6.20593 -7.375462,-12.40758 -10.460024,-18.92885 -0.981091,-2.33025 -1.070224,-2.3795 -1.769372,-4.55845 -0.131046,-0.40841 -0.02143,-0.9639 -0.351475,-1.23784 -1.102569,-0.91515 -2.507539,-1.38981 -3.724889,-2.14559 -0.05621,-0.0349 0.1285,-0.0315 0.192749,-0.0473 0.07269,0.20852 0.145383,0.41704 0.218075,0.62556 0.605157,2.19149 -0.08955,-0.37503 0.572034,2.26992 0.510088,2.03926 1.211951,4.02408 1.806612,6.03899 1.532506,4.80598 3.000158,9.6319 4.445429,14.46464 1.906635,5.99238 4.06306,11.90724 6.551051,17.68419 3.481382,7.85647 6.829055,15.77326 10.473751,23.55621 2.176992,4.395831 4.348371,8.828641 7.175417,12.853821 1.30482,0.71603 2.57589,1.49734 3.91446,2.1481 0.0687,0.0334 0.0702,-0.15554 0.0399,-0.22566 -0.10346,-0.23939 -0.28286,-0.43822 -0.42208,-0.65874 -1.10194,-1.74538 -2.21312,-3.48604 -3.23205,-5.28198 C 76.685351,99.648699 73.36184,93.828039 70.208441,87.910519 66.427428,80.684009 62.821052,73.357609 58.544203,66.402839 52.6544,56.483849 46.79294,46.545939 40.63267,36.790979 c -0.520319,-0.83627 -6.042003,-9.70506 -6.494385,-10.45625 -1.080434,-1.7941 -2.116757,-3.6144 -3.171397,-5.42378 -2.624904,-4.50338 -5.291806,-8.99103 -7.615536,-13.6607598 -0.446069,-0.98335 -0.913664,-1.95723 -1.338209,-2.95007 -0.26224,-0.61327 -0.240361,-1.40433 -0.721353,-1.86642 -1.020855,-0.98071 -2.343779,-1.59659998 -3.587387,-2.27289998 -0.312587,-0.16999 0.547375,0.46195 0.769072,0.74025 1.228731,1.54249998 2.762697,4.06432998 3.744553,5.59739998 5.057714,8.3198598 9.949304,16.7214198 14.413515,25.3789198 1.456802,2.82519 2.921553,5.64826 4.265248,8.52896 1.387147,2.97387 2.616218,6.01894 3.924329,9.02841 2.465779,7.24063 3.780414,9.93141 4.84119,17.40713 1.001006,7.05449 0.412263,13.57428 -1.746348,20.33684 -0.564404,1.76817 -1.358937,3.45446 -2.038406,5.18169 -1.690029,2.58019 -2.346201,4.18915 -4.845825,5.95536 -2.429505,1.716671 -5.593517,1.979431 -8.458179,1.716321 -1.008946,-0.0927 -1.997011,-0.343801 -2.995517,-0.515691 -0.961737,-0.28008 -1.885259,-0.78126 -2.88521,-0.84024 -0.308602,-0.0182 0.87557,0.84936 0.601909,0.70556 -1.796981,-0.94425 -2.996989,-2.58493 -3.258601,-4.59924 -0.08269,-0.63672 0.0041,-1.28413 0.0061,-1.92619 0.112834,-0.64674 0.167592,-1.30635 0.3385,-1.94022 0.630428,-2.33816 1.998789,-4.89628 4.039258,-6.28936 0.455597,-0.31105 0.974813,-0.51674 1.46222,-0.77511 1.331196,-0.40493 1.690294,-0.61627 3.100684,-0.63668 2.583117,-0.0374 5.388779,1.0356 7.901731,1.49533 3.076482,0.79203 6.128903,1.63538 9.164383,2.57428 0.937898,0.2901 3.646938,1.14472 4.698077,1.54802 0.422092,0.16195 0.824616,0.37091 1.236924,0.55636 z" />
   <circle
      id="path47"
      style="fill:#000000;stroke:#000000;stroke-width:0.264583"
      cx="119.2177"
      cy="112.02531"
      r="0.042978346" />
   <circle
      id="path54"
      style="fill:#000000;stroke:#000000;stroke-width:0.264583"
      cx="117.28172"
      cy="110.73465"
      r="0.042978346" />
   <path
      style="opacity:0.4;fill:#241f1c;stroke:#000000;stroke-width:0.264583;stroke-opacity:1"
      id="path55"
      d="m 111.73974,106.6983 c -2.3618,-1.34051 -4.85181,-2.46299 -7.45342,-3.25446 -0.61273,-0.18641 -1.23735,-0.3312 -1.85603,-0.4968 -2.873396,-0.6677 -5.899576,-0.84602 -8.796586,-0.19832 -0.46747,0.10451 -0.92268,0.25782 -1.38402,0.38673 -0.40361,0.14495 -0.82472,0.24822 -1.21083,0.43486 -1.65793,0.80141 -2.69892,2.37156 -3.20993,4.10001 -0.15124,0.51154 -0.22252,1.0434 -0.33378,1.5651 0.008,0.57723 -0.0564,1.16004 0.0241,1.7317 0.38805,2.75727 2.28159,5.20447 4.29166,7.01436 0.63218,0.56921 1.33149,1.0591 1.99724,1.58866 3.14498,2.45352 6.731116,4.21968 10.153386,6.23175 1.28365,0.7547 -2.63023,-1.40804 -3.86392,-2.24191 -3.818576,-0.61381 -7.627416,-1.32857 -11.472576,-1.76402 -2.23409,-0.25301 -2.65204,-0.23414 -4.77013,-0.31665 -1.05204,0.0508 -3.15782,0.11538 -3.66499,1.39968 -0.46143,1.16849 0.0714,2.83874 0.66282,3.78477 0.65119,1.04157 1.56236,1.89598 2.34353,2.84397 1.49904,1.15438 2.90048,2.44804 4.49712,3.46314 2.95406,1.87811 6.00114,3.61828 9.12518,5.19756 6.086736,3.07699 13.441306,5.71246 19.883516,7.70457 4.14035,1.28031 8.3196,2.44164 12.52865,3.47388 4.32278,1.06016 8.70376,1.86704 13.05565,2.80054 9.26715,1.29278 14.05951,2.37979 23.24949,2.15789 2.93255,-0.0708 5.89713,-0.23384 8.75421,-0.89863 3.92881,-0.91417 8.40324,-2.94868 10.32619,-6.86317 0.87847,-1.78827 0.71885,-3.9194 1.07827,-5.8791 -0.63531,-2.45131 -0.89766,-5.03103 -1.90594,-7.35394 -2.89021,-6.65857 -8.34286,-13.28216 -13.16665,-18.44625 -7.58361,-8.11861 -15.99632,-15.265521 -24.77396,-22.053481 -5.06763,-3.91892 -10.35909,-7.53954 -15.53864,-11.30931 -14.39543,-9.48154 -18.30631,-12.3703 -33.222876,-20.95246 -5.68438,-3.27047 -11.45354,-6.39362 -17.25051,-9.4601 -8.02189,-4.24342 -20.080559,-10.24442 -28.600375,-13.93605 -3.901612,-1.69057 -7.902405,-3.14234 -11.853608,-4.71351 -8.870204,-3.19178 -17.952424,-5.78989 -27.294467,-7.14147 -5.2821766,-0.76421 -6.6277146,-0.68036 -11.66359956,-0.83784 0,0 2.57309896,1.87797 2.57309896,1.87797 v 0 c 4.870158,0.0564 6.167743,-0.0571 11.2898236,0.61586 9.121468,1.19848 17.991097,3.67478 26.659069,6.71397 3.866608,1.50876 7.781452,2.89931 11.599823,4.52629 8.694047,3.70447 19.846496,9.2174 28.076085,13.52808 5.25884,2.7546 10.49689,5.5538 15.6449,8.51035 14.955626,8.58913 18.758736,11.41855 33.158256,20.91854 5.10875,3.73909 10.33448,7.32338 15.32626,11.21726 8.50839,6.63703 16.73083,13.732621 24.0262,21.710501 4.66172,5.09785 9.76223,11.48145 12.47818,18.01871 0.93842,2.25874 1.15863,4.75265 1.73794,7.12898 -0.34225,1.90462 -0.20148,3.96354 -1.02676,5.71386 -1.81598,3.8515 -5.95135,5.95004 -9.81124,6.95212 -2.7533,0.7148 -5.62533,0.94417 -8.4675,1.06101 -9.09554,0.37393 -13.68608,-0.69422 -22.88805,-1.93501 -4.36117,-0.94548 -8.75447,-1.75334 -13.08352,-2.83643 -7.80129,-1.95185 -16.43467,-4.62288 -23.93423,-7.62424 -2.50701,-1.00332 -9.954656,-4.25924 -13.191516,-6.43011 -1.48278,-0.99445 -2.82453,-2.18455 -4.23679,-3.27682 -1.53065,-1.84665 -2.47519,-2.40688 -2.95014,-4.63055 -0.0934,-0.43716 -0.11361,-0.92243 0.0452,-1.34031 0.42371,-1.11519 2.49176,-1.17802 3.3648,-1.23667 0.68469,0.0164 1.37023,0.0113 2.05407,0.0492 4.8196,0.26707 9.57259,1.23537 14.298216,2.16087 2.73591,-0.47468 1.57174,0.0338 -2.1563,-2.4248 -0.65543,-0.43224 1.42995,0.69619 2.01482,1.21998 0.5144,0.4607 -1.20733,-0.67119 -1.79922,-1.02689 -2.005566,-1.20527 -2.131206,-1.34688 -4.077966,-2.71516 -0.65944,-0.51051 -1.35011,-0.98305 -1.97832,-1.53154 -1.93151,-1.68641 -3.90075,-4.11024 -4.32239,-6.72135 -0.0875,-0.54169 -0.0315,-1.09697 -0.0472,-1.64546 0.10856,-0.49985 0.17875,-1.0096 0.32568,-1.49955 0.68913,-2.29798 1.96864,-3.54113 4.23666,-4.23806 0.4479,-0.12263 0.88979,-0.26985 1.34371,-0.36789 2.86144,-0.61808 5.830026,-0.397 8.654446,0.29482 0.61307,0.17156 1.23206,0.3232 1.8392,0.51468 2.66238,0.83969 5.1826,2.04694 7.59966,3.43302 z" />
   </svg></p>
   
      </div>
      
      <div class="page" id="Projektbeispiele">
          <h1>Projektbeispiele</h1>
          <section id="web-development">
          <h3>Meine Website erp-it.net</h3>
          <p>Dies ist meine persönliche Website, ich nutze sie, um neue Web-Technologien in einer realen Umgebung mit Nutzerzugriffen zu testen. Ich führe dort einen Blog rund um IT-Themen und eine Tools-Seite mit hilfreichen Tabellen.<br/>
          Als Datenbank nutze ich hier MongoDB, hauptsächlich weil es kostenlos und flexibel ist – ideal zum Lernen.</p>
          <p>Technologien im Einsatz: HTML, CSS (SCSS/SASS), JavaScript (TypeScript), Node.js <br/>
          Frameworks: React, Next.js, Tailwind (für dynamische Routen im Blog).<br/>
          Webhost: Ich hoste meine Seite über Vercel und nutze die DNS-Einträge meiner eigenen Domain "www.erp-it.net". </p>
          <div class="embedded-images">
            <!-- <img  src="https://uploads.erp-it.net/images/website-snippet.png" alt="yo"> -->
            <!-- <img  src="https://uploads.erp-it.net/images/website-blog-snippet.png" alt="yo"> -->
            <!-- <img src="/home/dci/Desktop/Github/bewerbungshelper/assets/Screenshot from 2025-05-08 07-31-57.png" alt="ye"> -->
          </div>
         
      
      </section>
          <section id="application">
          <h3>ERP-System</h3>
          <p>Dies ist mein derzeitiges Projekt. Durch meinen Unterricht lernen wir viel über Unternehmensprozesse und welche Anforderungen es für Software in diesem Kontext gibt. Mein Konzept beinhaltet jedoch auch CMS-Elemente, denn ich plane eine Lite-Version als Web-Application zu entwickeln, wobei die Hauptanwendung jedoch eine Desktop-Only-Version bleiben soll, welche unabhängig vom Internet funktionieren muss. Mit dem Fokus auf Sicherheit, Stabilität und somit auch Zuverlässigkeit.</p>
          <p>Technologien: XAML, .NET C#, Python, MySQL</p>
          <div class="embedded-images">
            <!-- <img src="/home/dci/Desktop/Github/bewerbungshelper/assets/Screenshot from 2025-05-06 13-50-09.png" alt=""> -->
            <!-- <img id="percurio-preview-img" src="https://uploads.erp-it.net/images/Percurio.drawio.png" alt=""> -->
            <!-- <img id="percurio-preview" src="/home/dci/Desktop/Github/bewerbungshelper/assets/Screenshot from 2025-05-08 07-34-15.png" alt=""> -->
            
            </div>
      </section>
          <section id="embedded">
              <h3>Embedded Software</h3>
              <p>In diesem Bereich habe ich einige Hobbyprojekte mit Microcontrollern, in denen ich unter anderem Smarthome-Geräte entwickle. </p>
              <p>Microcontroller: ESP32, Raspberry Pi & Technologien: Flask, C++, AI</p>
              <div class="embedded-images">
              <!-- <img src="https://uploads.erp-it.net/images/ES3.jpg" alt=""> -->
              <!-- <img id="vpd-preview" src="https://uploads.erp-it.net/images/vpd-preview.png" alt=""> -->
            </div>
          </section>
      </div>
      <div class="page" id="zeugnis">
        <!-- <img id="zeugnis" src="/home/dci/Desktop/Github/bewerbungshelper/assets/For_MariusErpenbach.png" alt="Logo"> -->
      </div>
  
  
  </body>
</html>

`;