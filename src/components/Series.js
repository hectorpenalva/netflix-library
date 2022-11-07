import "./Series.css";

export default function Series() {
  const SERIES = [
    {
      titulo: "1. Unorthodox - menos de cuatro horas",
      descripcion:
        "Esta serie se estrenó en Netflix en 2020 y si no la has visto todavía, ya estás tardando. Fue todo un pelotazo cuando se lanzó y es que no es para menos. Está basada en la historia real de Deborah Feldman y cuenta como una joven de 19 años se escapa de su comunidad judía ortodoxa en Nueva York para trasladarse a Berlín. Allí, la protagonista experimentará el brutal choque entre su cultura y la berlinesa. Esta serie tiene solo cuatro episodios y la puedes ver en menos de cuatro horas. Sus capítulos varían entre los 52 y los 55 minutos.",
    },
    {
      titulo: "2. Sagrada Familia - menos de cinco horas",
      descripcion:
        "Si hay una serie de Netflix que estén recomendando los fans del audiovisual en este momento, esta es Sagrada Familia. Esta ficción protagonizada por Najwa Nimri mezcla lo sensual con lo siniestro para ofrecer un verdadero espectáculo a quienes la ven... Sagrada Familia narra cómo una familia se traslada a Madrid para tratar de escapar de su pasado, pero, como suele decirse, el pasado siempre vuelve... Así que nada será tan fácil. Sagrada Familia tiene una temporada de 8 episodios de entre 33 y 40 minutos. Para verla en formato de maratón tendrás que invertir algo menos de cinco horas..",
    },
    {
      titulo: "3. La directora - tres horas",
      descripcion:
        "Esta comedia de Netflix es tan poco usual como evocadora. A través de solo seis episodios La directora narra cómo la primera mujer no blanca en dirigir un departamento de Inglés de una de las universidades más destacadas de EEUU tiene que lidiar con las exigencias y expectativas de su departamento. La directora tiene seis capítulos de 30 minutos cada uno... Así que, si tienes tres horas, puedes hacerte un buen maratón.",
    },
    {
      titulo: "4. Las de la última fila - cuatro horas y media",
      descripcion:
        "Las de la última fila tiene seis capítulos de unos 45 minutos, así que la puedes ver en unas cuatro horas y media.",
    },
    {
      titulo: "5. Bonding - menos de dos horas",
      descripcion:
        "Si buscas algo todavía más corto que Unorthodox puedes optar por Bonding. Esta serie se ve en menos de dos horas y, además, te hará pasar un rato muy divertido. Es una comedia protagonizada por una dominatrix y su asistente, dosificada en 7 capítulos que van desde los 17 a los 13 minutos de duración.",
    },
    {
      titulo: "6. Alias Grace - cinco horas y cuarto",
      descripcion:
        "Si has visto o leído El cuento de la criada puede que esta serie también te interese. Está basada en la historia de Grace Marks, de la escritora Margaret Altwood y narra cómo un psiquiatra evalúa si el estado mental de una asesina puede exculparla o no. Esta serie es corta. Está dividida en siete capítulos que van desde los 46 minutos de duración a los 43.",
    },
    {
      titulo: "7. La Playlist - menos de seis horas",
      descripcion:
        "Esta miniserie sueca narra cómo el empresario Daniel Ek y su socio, Martin Loretzon, revolucionan la industria de la música lanzando una plataforma de audio en streaming legal llamada Spotify. La Playlist ha recibido muy buenas críticas y consta solo de seis capítulos de menos de una hora, por lo que, en seis horas o menos, se puede ver.",
    },
    {
      titulo: "8. Drácula - menos de cuatro horas y media",
      descripcion:
        "Esta serie es una vuelta de tueca al legendario Drácula. Aporta historias nuevas y detalle suculentos a los crímenes del legendario Conde y además, expone su lado más vulnerable. Drácula tiene tres episodios y dura unas cuatro horas y media.",
    },
    {
      titulo: "9. Gabinete de curiosidades - menos de ocho horas",
      descripcion:
        "La última serie de Guillermo del Toro, Gabinete de curiosidades, es escalofriante e intrigante... No hay más formas para definir las historias y relatos distintos que abarca. Esta serie tiene ocho capítulos que se ven, en formato de maratón, en menos de ocho horas.",
    },
    {
      titulo: " 10. Intimidad - seis horas y media",
      descripcion:
        "Si no has visto Intimidad, ya estás tardando. Esta serie es una de las más recomendadas entre las novedades de Netflix tanto por su calidad como por su actualidad. Intimidad narra cómo una candidata a la alcaldía de Bilbao ve peligrar su puesto en el partido cuando una grabación íntima sale a la luz.Intimidad tiene ocho episodios de entre 44 y 51 minutos, así que podrás verla completa en unas seis horas y media.",
    },
    {
      titulo: "11. Godless - menos de ocho horas",
      descripcion:
        "Para los fans de lo siniestro y las películas del oeste que busquen series cortas, Godless, de Netflix, es una muy buena opción. Esta serie lleva a sus espectadores al Salvaje Oeste, donde un despiadado forajido siembra el terror mientras busca a un exmiembro de su banda que ahora vive en una tranquila ciudad en la que solo residen mujeres. Godless tiene siete capítulos y se puede ver completa en menos de ocho horas.",
    },
    {
      titulo: "12. Sky Rojo - menos de ocho horas",
      descripcion:
        "De los creadores de La Casa de Papel, en Netflix se puede encontrar desde este 2021 Sky Rojo, una serie de acción rodada en un Tenerife algo distópico en la que tres mujeres perseguidas por su pasado emprenden una huida salvaje para escapar del burdel en el que su proxeneta las tiene secuestradas. Esta serie cuenta ya con dos temporadas aunque son muy cortas. Cada temporada tiene ocho episodios de entre 25 y 40 minutos y puedes verla entera en algo menos de ocho horas, si lo que quieres es hacer un maratón.",
    },
    {
      titulo: "13. El tiempo que te doy - dos horas y media",
      descripcion:
        "Esta serie es una de las más originales de Netflix. Producida en España y protagonizada por Nadia de Santiago y Álvaro Cervantes, El tiempo que te doy presenta un formato único, con capítulos de solo 13 minutos, 1 de presente y 10 de recuerdo, 2 de presente y 9 de recuerdo, 3 de presente y 8 de recuerdo y así progresivamente. En cuanto al argumento, esta serie retrata una ruptura tras nueve años de relación. El tiempo que te doy se puede ver en menos de dos horas y media.",
    },
    {
      titulo: "14. The End of the F***ing World - cinco horas y cuarto",
      descripcion:
        "Si te van las emociones fuertes esta puede ser tu serie del fin de semana. Es una historia divertida, romántica y rebelde en la que se cuenta cómo dos adolescentes se creen psicópatas. Tardarás algo menos de cinco horas y media en ver sus dos temporadas. Cada una tiene 8 episodios de alrededor de 20 minutos.",
    },
    {
      titulo: "15. Esta mierda me supera - dos horas y media",
      descripcion:
        "Esta serie es una adaptación de la novela gráfica homónima de Charles Frosman y en ella se cuenta la historia de Sydney Novak, una adolescente que además de tener que lidiar con problemas en casa y en el instituto tiene que adaptarse a unos poderes sobrenaturales. La serie tiene siete episodios y se puede ver en unas dos horas y media.",
    },
    {
      titulo: "16. El desorden que dejas - seis horas",
      descripcion:
        "Otra opción, además muy actual, es ver El desorden que dejas. Esta serie española que trata la historia de Raquel, una profesora que llega a un instituto para sustituir a una docente que se ha quitado la vida, engancha a todo el que la empieza y se puede ver en poco más de seis horas. Tiene 8 capítulos que van desde los 35 minutos hasta los 52.",
    },
    {
      titulo: "17. Gamtibo de dama - siete horas",
      descripcion:
        "Es imposible que no hayas escuchado hablar de esta serie, así que, si no la has visto, este fin de semana puede ser un buen momento para que te pongas al día y entiendas por qué estas navidades los tableros de ajedrez han sido el regalo estrella en muchas casas. Tendrás que invertir siete horas, pero valdrá la pena. Son siete capítulos que duran entre 67 minutos y 46.",
    },
    {
      titulo: "18. Selfmade - tres horas y media",
      descripcion:
        "Otro de los estrenos de 2020 que podemos añadir a esta lista es Selfmade, una serie basada en la realidad que cuenta cómo una humilde lavandera afroamericana erige su propio imperio con una empresa de productos de belleza. Esta serie la puedes ver en menos de 3 horas y media, ya que solo cuenta con cuatro capítulos de entre 45 y 49 minutos. ¡Ideal para un maratón de series!",
    },
    {
      titulo: "19. ¿Quién es Anna? - menos de 10 horas",
      descripcion:
        "¿Quién es Anna? se merece un puesto en este listado. Esta serie corta, de solo 10 capítulos, cuenta la historia de Anna Delvey, una mujer que logró convencer a la élite de Nueva York de que era una rica heredera llegada de Alemania. Pero ¿es esa su verdadera identidad? Esta ficción tiene nueve capítulos de algo más de una hora, por lo que tardarás casi 10 horas en verla entera.",
    },
    {
      titulo: "20. El Espía - menos de seis horas",
      descripcion:
        "¿Tienes seis horas libres? Entonces puedes ver El Espía. Esta serie corta de suspense traslada a los espectadores a los años sesenta, cuando Eli Cohen se convierte en agente secreto del Mosad y se infiltra en Siria para trabajar en una misión que durará años. El Espía tiene seis capítulos y se ve en menos de seis horas.",
    },
    {
      titulo: "21. Los favoritos de Midas - cinco horas",
      descripcion:
        "Los favoritos de Midas es otra de las series españoles que deben entrar en esta lista. Estrenada también el pasado 2020 cuenta cómo un millonario magnate es chantajeado por un grupo que parece invisible. Es totalmente adictiva y sus seis capítulos se pueden ver en algo más de cinco horas.",
    },
    {
      titulo: "22. Alguien tiene que morir - menos de tres horas",
      descripcion:
        "Si te gustó La casa de las flores, tienes que verAlguien tiene que morir, la última creación de su director. En esta serie, en la que aparece Ester Expósito y Alejandro Speitzer se cuentan los dramas que azotaron a una familia adinerada durante el franquismo. Tiene solo tres capítulos y cada uno dura entre 49 y 52 minutos.",
    },
    {
      titulo: "23. El inocente - menos de ocho horas",
      descripcion:
        "Si eres fan de las miniseries seguro que has escuchado hablar de El Inocente. Aunque se ha estrenado hace muy pocos días, esta ficción española basada en el libro homónimo de Harlan Coben está cobrando una gran popularidad. En ella, una muerte accidental arrastra a un hombre a un mundo lleno de intrigas y asesinatos. La serie tiene ocho capítulos de entre 49 y 17 minutos y puede verse completa en unas ocho horas.",
    },
    {
      titulo: "24. Días de Navidad - tres horas",
      descripcion:
        "Si quieres algo corto que te ayude a calentar motores para la Navidad, esta es tu mejor apuesta. Días de Navidad, protagonizada por Victoria Abril, Elena Anaya y Mar Ayala es una preciosa obra de arte optimista y sentimental. En ella, cuatro hermanas se enfrentan a los dramas y secretos de su familia con la Navidad como telón de fondo. Días de Navidad tiene tres capítulos de una hora.",
    },
    {
      titulo: "25. Maniac - seis horas",
      descripcion:
        "Si eres fan de las historias enrevesadas, Maniac está hecha para ti. Emma Stone y Jonah Hill y Justin Theroux protagonizan una serie que parte con dos desconocidos que se conocen en un ensayo clínico. En seis horas podrás ver sus diez capítulos. ¡Perfecta para hacerte un maratón!",
    },
    {
      titulo: "26. Muñeca rusa - unas siete horas y media",
      descripcion:
        "Si te agobias fácil igual Muñeca rusa no es para ti. Si no es el caso, a disfrutar. Esta serie cuenta cómo Nadia, la protagonista, muere durante su cumpleaños y de repente resucita para volver a la misma fiesta en la que pierde la vida. La chica intenta cambiar las cosas para tratar de escapar de su trágico final... pero siempre acaba en el mismo punto: muerta. Tardarás unas siete horas y media en ver sus 15 capítulos que van desde los 24 minutos de duración a los 33.",
    },
    {
      titulo:
        "27. Dahmer. Monstruo: la historia de Jeffrey Dahmer- menos de nueve horas",
      descripcion:
        "Sin duda es una de las series del momento. Dahmer, la ficción de Netflix que repasa la vida y las atrocidades que cometió el conocido como el carnicero de Milkwaukee, es una de las series más recomendadas del momento y la verdad es que, todos aquellos que la ven, consideran que cumple con sus expectativas. Son 10 capítulos de terror psicológico que a la par que siniestros, están perfectamente hechos. Dahmer tiene diez episodios de algo menos de una hora, por lo que tardarás en verla algo más de ocho horas y media.",
    },
    {
      titulo: "28. The Confession Killer - cuatro horas y media",
      descripcion:
        "Si ya has visto Dahmer quizá te guste The Confession Killer. En formato docuserie, esta producción da detalles sobre el caso de Henry Lee Lucas, quien después de ser condenado por tres asesinatos, llegó a confesar hasta 600. The Confession Killer tiene cinco capítulos que se pueden ver en unas cuatro horas y media.",
    },
    {
      titulo: "29. Arenas movedizas - cuatro horas y media",
      descripcion:
        "Arenas movedizas es otra de las series más siniestras de Netflix. Esta miniserie de seis capítulos narra cómo, después de una tragedia en un centro escolar que conmociona a un barrio rico de Estocolmo, una adolescente aparentemente normal y equilibrada caba acusada de asesinato. Arenas movedizas tiene seis episodios de 45 minutos, así que se puede ver en cuatro horas y media.",
    },
    {
      titulo: "30. La chica del vaticano - cuatro horas",
      descripcion:
        "Esta miniserie documental no deja indiferente a nadie. Este documental en formato serie investiga la desaparición de Emanuela Orlandi, una chica que desapareció en Roma en el año 1983 y cuya búsqueda ha durado varias décadas. La chica del vaticano tiene solo cuatro episodios de entre 55 y 63 minutos, por lo que para verla solo necesitarás cuatro horas. ¡Ideal para un maratón largo!",
    },
    {
      titulo: "31. La Emperatriz - seis horas",
      descripcion:
        "La Emperatriz es otra de las series de Netflix más recomendadas del momento. Esta ficción de época está inspirada en la vida de la emperatriz austriaca Isabel de Baviera, más conocida como Sissi. La Emperatriz cuenta en estos momentos con seis episodios de alrededor de una hora, así que si la ves a capítulo por día, en menos de una semana la acabarás o si queires, puedes hacer un maratón de algo más de seis horas y finalizarla del tirón.",
    },
    {
      titulo: "32. Typewriter - cuatro horas",
      descripcion:
        "Typewritter aporta otro toque de terror a esta lista. En ella tres jóvenes amigos de Goa quieren buscar espíritus en una mansión abandonada, pero cuando allí se instala una familia, el pasado de la casa vuelve para que aumente un poco la tensión. Esta serie tiene hasta ahora cinco episodios de entre 54 y 42 minutos, por lo que se puede ver en algo más de cuatro horas, en caso de que quieras hacerte un maratón.",
    },
    {
      titulo: "33. Heartstopper - cuatro horas",
      descripcion:
        "Esta serie de amor adolescente ha cautivado a los fans de Netflix con una historia única y unos personajes con los que es muy fácil empatizar.",
    },
    {
      titulo: "34. Fariña - diez horas",
      descripcion:
        "Fariña es una de las series más largas de este listado pero es un imprescindible de Netflix, y una de las más recomendadas. Producida originalmente por Atresmedia Televisión y basada en el libro homónimo de Nacho Carretero, esta ficción basada en hechos reales retrata el modus operandi del narcotráfico en Galicia. Fariña tiene 10 capítulos de alrededor de una hora por lo que se necesitarán diez horas para verla.",
    },
    {
      titulo: "35. La asistenta - menos de diez horas",
      descripcion:
        "Al igual que con Fariña, para ver La Asistenta necesitarás unas diez horas. Esta serie íntima y emotiva sigue la vida de una joven madre que, tras escapar de una relación de malos tratos, encuentra un trabajo de asistenta con el que intenta construir un futuro alentador para ella y para su hija. Esta serie cuenta con diez episodios de alrededor de una hora cada uno.",
    },
    {
      titulo: "36. Crashing - dos horas y cuarto",
      descripcion:
        "¿Has visto Fleabag? Si te gustó, también te gustará Crashing, pues es Phoebe Waller-Bridge en estado puro. En ella, un grupo de jóvenes que andan un poco pelados, a cambio de un alquiler barato se mudan a un hospital abandonado. Tardarás unas dos horas y cuarto en ver sus seis episodios.",
    },
    {
      titulo: "37. Halston - menos de cuatro horas",
      descripcion:
        "Si eres de los que aman las cosas brillantes, esta es tu serie. Halston retrata la vida del famoso diseñador de moda estadounidense Roy Halston Frowick y cómo, además de crear, este se acercó a prácticas peligrosas que le llevaron a perder el control. Halston tiene cinco episodios de unos 45 minutos, así que antes de que hayan pasado cuatro horas, la habrás visto al completo.",
    },
    {
      titulo: "38. Vigilante - Cinco horas y media",
      descripcion:
        "Para los fans del suspense, Vigilante es una muy buena opción. Esta serie de Netflix plasma cómo una familia se ve inmersa en una auténtica pesadilla al poco de mudarse a la que debía ser la casa de sus sueños. Esta miniserie de Netflix tiene ocho capítulos de unos 45 minutos cada uno. La podrás ver entera en unas cinco horas y media.",
    },
    {
      titulo: "39. Así nos ven - cinco horas",
      descripcion:
        "Basada en hechos reales, Así nos ven es una miniserie en la que se narra cómo cinco adolescentes afroamericanos de Harlem se ven atrapados en una pesadilla cuando se les acusa injustamente de un ataque en Central Park. Esta miniserie cuenta con cuatro capítulos de entre 64 y 88 minutos y puede verse en cinco horas",
    },
    {
      titulo: "40. Paquita Salas - siete horas",
      descripcion:
        "¿Tienes siete horas para invertir en diversión? Entonces tu serie para este fin de semana es Paquita Salas. El formato de los Javis presenta a una representante de actores que en la década de los 90 entra en decadencia al tener dificultades para adaptarse a los nuevos tiempos. La serie tiene tres temporadas y los capítulos duran entre 20 y 38 minutos, por lo que verla entera te llevará un pelín más de siete horas si te haces un maratón.",
    },
    {
      titulo: "41. La Serpiente - menos de siete horas",
      descripcion:
        "Esta miniserie británica ha sido toda una revelación. La Serpiente traslada a la pantalla una historia basada en hechos reales en la que se persigue al asesino Charles Sobharaj, un hombre que se ensañaba se ensaña con los turistas de la ruta hippy del sur de Asia en la década de los 70. La Serpiente tiene siete capítulos que duran unos 58 minutos, por lo que podrás verla en una semana, si vas a capítulo por día, o en algo menos de siete horas si lo que quieres es hacer un maratón.",
    },
    {
      titulo: "42. Collateral - cuatro horas",
      descripcion:
        "Si eres fan de las series policiacas, esta miniserie está hecha para ti. Collateral persigue a una detective que destapa, mientras investiga un asesinato, una enorme conspiración en la que están implicados tanto espías como narcotraficantes. Collateral tiene cuatro episodios de unos 58 minutos, así que en menos de cuatro horas la habrás visto entera.",
    },
    {
      titulo:
        "43. Jeffrey Epstein: asquerosamente rico - menos de cuatro horas",
      descripcion:
        "Si te gustan las docuseries, esta debe estar en tu lista de imprescindibles. Jeffrey Epstein, asquerosamente rico narra el caso judicial contra el magnate financiero condenado por crear una red de tráfico de menores en el mundo de la élite. Esta serie tiene solo cuatro capítulos de unos 55 minutos, por lo que se puede ver entera en menos de cuatro horas.",
    },
    {
      titulo: "44. Wild Wild Country - seis horas y media",
      descripcion:
        "Otra docuserie imprescindible de Netflix es Wild Wild Country. Esta serie corta narra cómo el polémico gurú Bhagwan Shree Rajnees, más conocido como Osho, construye una ciudad utópica en un desierto de Oregón. Wild Wild Country tiene seis capítulos de algo más de una hora, por lo que se puede ver en unas seis horas y media.",
    },
    {
      titulo: "45. Misa de Medianoche - seis horas y media",
      descripcion:
        "Esta serie corta, parte de la colección Mike Flanagan, es de lo más terrorífico e inquietante que hay en Netflix. Misa de Medianoche trata sobre una comunidad al borde de la extinción y sedienta de fe recibe la llegada de un sacerdote que, a la vez que milagros, les trae muchísimos misterios. Los siete capítulos de Misa de medianoche se pueden ver en unas seis horas y media.",
    },
    {
      titulo: "46. Quédate a mi lado - seis horas y cuarto",
      descripcion:
        "Otra miniserie de suspense muy valorada por la crítica que no podía faltar en este listado es Quédate a mi lado. Su sinopsis: Cuando Carlton Flynn desaparece 17 años después de la noche que lo hiciese Stewart Green, se desata una reacción en cadena en las vidas de las personas ligadas a los dos... Esta serie tiene ocho capítulos de unos 45 minutos cada uno, así que se puede ver completa o en formato de maratón, en unas seis horas y cuarto.",
    },
    {
      titulo: "47. Si lo hubiera sabido - cuatro horas y media",
      descripcion:
        "Si lo hubiera sabido es una de las últimas novedades de Netflix. Esta serie cuenta cómo Emma, que lleva diez años en un matrimonio que ha resultado ser decepcionante para ella, no puede más con su situación sentimental. Está al límite y, de repente, se le presenta una extraordinaria oportunidad que no querrá dejar escapar... Esta serie tiene ocho capítulos y se puede ver en cuatro horas y media.",
    },
    {
      titulo: "48. No sabéis quién soy - menos de cuatro horas",
      descripcion:
        "Otra opción de serie corta de suspense en Netflix es No sabéis quién soy. Esta ficción retrata cómo cuando todas las pruebas apuntan en su dirección, un hombre acusado de asesinato utiliza su alegato de clausura en el juicio para narrar una increíble historia de amor con una mujer misteriosa. No sabéis quién soy tiene cuatro episodios de unos 55 minutos. Se puede ver en formato maratón en menos de cuatro horas.",
    },
    {
      titulo: "49. Bobby Kennedy for president - cuatro horas",
      descripcion:
        "También con una duración de cuatro horas, Netflix ofrece la miniserie Bobby Kennedy for president. Esta producción en formato de relato histórico recoge a grandes voces de los sesenta arrojando luz sobre el fenómeno Bobby. Bobby Kennedy for president consta de cuatro episodios de una hora de duración.",
    },
    {
      titulo: "50. After Life - menos de nueve horas",
      descripcion:
        "Aunque tiene tres temporadas, After Life también se ve rápido. Esta serie británica narra cómo un periodista trata de asimilar la muerte de su mujer cambiando de actitud ante la vida mientras intenta alejar a los que tratan de ayudarle. La serie tiene tres temporadas de seis capítulos cada una. Sus episodios duran entre 27 y 31 minutos y puede verse en algo menos de nueve horas en formato de maratón.",
    },
    {
      titulo: "51. Feel Good - seis horas",
      descripcion:
        "Al igual que After LIfe, Feel Good tiene dos temporadas, pero se ve rápido. Esta serie corta cuenta la historia de la cómica Mae Martin, una mujer que se debate entre la abstinencia y la adicción mientras empieza una relación complicada con otra mujer. Feel Good tiene unos 12 capítulos de unos 30 minutos cada uno, así que puede verse en formato maratón en unas seis horas.",
    },
    {
      titulo: "52. Hollywood - menos de siete horas",
      descripcion:
        "Si eres de los que no se resisten a una buena telenovela, Feel Good puede ser una buena opción para ti. Esta serie corta de Netflix narra cómo un grupo de actores y cinestas tratan de triunfar en el Hollywood de postguerra. Hollywood tiene siete episodios de entre 45 y 57 minutos, así que en menos de siete horas podrías verla completa.",
    },
  ];

  return (
    <div className="list-group w-auto">
      {SERIES.map((serie) => {
        return (
          <div
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h3 className="mb-0">{serie.titulo}</h3>
                <p className="mb-0 opacity-75">{serie.descripcion}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
