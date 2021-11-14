
/* INFO */

setKeyHandler ( 'i', HYPER, () => {

  const windows = Space.active ().windows ();

  windows.forEach ( window => {

    if ( !window.isVisible () || !window.title () ) return;

    modalWindow ( {}, window );

  });

});

setKeyHandler ( 'i', HYPER_SHIFT, () => {

  shell ( 'pmset -g batt | grep -Eo "\\d+%" | cut -d% -f1', ( id, output ) => {

    const battery = output.trim ();

    const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          daysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          pad = x => `00${x}`.slice ( -2 );

    const date = new Date (),
          hours = pad ( date.getHours () ),
          minutes = pad ( date.getMinutes () ),
          seconds = pad ( date.getSeconds () ),
          wday = daysNames[date.getDay ()],
          day = date.getDate (),
          month = monthsNames[date.getMonth ()],
          year = date.getFullYear ();

    const info = `${battery}% - ${wday} ${day} ${month} ${year} - ${hours}:${minutes}:${seconds}`;

    alert ( info );

  });

});
