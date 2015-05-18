(function(){

'use strict';

var starbase_int = Math.floor(Math.random()*900) + 100;

var lcars_log = [
  'STARFLEET COMMAND PRIORITY 1 MESSAGE:',
  'SPECIAL MESSAGE FROM STARBASE ' + starbase_int + ':',
  'ALERT FORM CHIEF ENGINEER:',
  'ERROR IN ISOLINEAR CHIPS:',
  'HEISENBERG COMPENSATOR STATUS:',
  'WARP CORE INTERMIX STATUS:',
  'DILITHIUM MATRIX ALERT:'
  ];

var ufp_emblem =

'  ______________________________________                      _________    ' + '\n' +
' /       _______________________________|   SYSTEM MESSAGE   |_________)   ' + '\n' +
'|       |                                                                  ' + '\n' +
'|       |                                                                  ' + '\n' +
'|       |                                                                  ' + '\n' +
'|       |                 ______                                           ' + '\n' +
'|_______|              _-` .   .`-_                                        ' + '\n' +
' _______           |/ /  .. . `   .\\ \\|                                  ' + '\n' +
'|       |         |/ /            ..\\ \\|                                 ' + '\n' +
'|_______|       \\|/ |: .   ._|_ .. . | \\|/                               ' + '\n' +
' _______         \\/ |   _|_ .| . .:  | \\/                                ' + '\n' +
'|       |       \\ / |.   |  .  .    .| \\ /                               ' + '\n' +
'|       |        \\||| .  . .  _|_   .|||/                                 ' + '\n' +
'|       |      \\__| \\  . :.  .|.  ./ |__/                                ' + '\n' +
'|       |         __| \\_  .    .. _/ |__                                  ' + '\n' +
'|       |          __|  `-______-`  |__                                    ' + '\n' +
'|       |             -,____  ____,-                                       ' + '\n' +
'|       |               ---`  `---                                         ' + '\n' +
'|       |      UNITED FEDERATION OF PLANETS                                ' + '\n' +
'|       |                                                                  ' + '\n' +
'|       |      ' + lcars_log[ Math.floor(Math.random() * lcars_log.length) ] + '\n' +
'|_______|      ';

    console.lcars = function(){

      Array.prototype.unshift.call(

        arguments, ufp_emblem );

      console.log.apply( console, arguments );
    };
  })
();
