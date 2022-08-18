
  [![Deutsch](https://img.shields.io/badge/🇩🇪-Deutsch-inactive)](https://github.com/prolixalias/ravynos/blob/potential_readme_discussion/i18n/rendered/README.de_DE.md)    [![English](https://img.shields.io/badge/🇬🇧-English-inactive)](https://github.com/prolixalias/ravynos/blob/potential_readme_discussion/i18n/rendered/README.en_GB.md)    [![Indonesia](https://img.shields.io/badge/🇮🇩-Indonesia-inactive)](https://github.com/prolixalias/ravynos/blob/potential_readme_discussion/i18n/rendered/README.id_ID.md)    [![Italiano](https://img.shields.io/badge/🇮🇹-Italiano-2ea44f)](https://github.com/prolixalias/ravynos/blob/potential_readme_discussion/i18n/rendered/README.it_IT.md)    [![Türkçe](https://img.shields.io/badge/🇹🇷-Türkçe-inactive)](https://github.com/prolixalias/ravynos/blob/potential_readme_discussion/i18n/rendered/README.tr_TR.md)     
<p align="left"><h1> Cos&#39;è ravynOS? </h1></p>
<p>

[![Build Status](https://api.cirrus-ci.com/github/ravynsoft/ravynos.svg?branch=main)](https://cirrus-ci.com/github/ravynsoft/ravynos) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

</p>

ravynOS è un nuovo sistema operativo open source che cerca di fornire un&#39;esperienza simile a quella di macOS cercando di fornire anche la possibilità di eseguire le sue applicazioni per i sistemi basati su x86-64. È basato sulla fondazione solida di FreeBSD, con nuovo codice e con pacchetti open source già esistenti.

Gli obiettivi principali sono:

- Compatibiltà a livello source con le applicazioni macOS (e.s. puoi compilare un&#39;applicazione per macOS su ravynOS ed eseguirla)
- Mantenere una filosofia dell&#39;inferfaccia utente simile (gestore file, launcher delle applicazioni, barra superiore che cambia rispetto all&#39;applicazione che si sta usando, etc)
- Compatibilità con la struttura delle cartelle di macOS (&#x2F;Library, &#x2F;System, &#x2F;Users, &#x2F;Volumes, etc) e anche dei suoi filesystem (HFS+, APFS) mantenendo anche la compatibilità con ZFS
- Applicazioni auto contenute in [App Bundles](https:&#x2F;&#x2F;developer.apple.com&#x2F;documentation&#x2F;foundation&#x2F;bundle), [AppDirs](https:&#x2F;&#x2F;github.com&#x2F;AppImage&#x2F;AppImageKit&#x2F;wiki&#x2F;AppDir), e [AppImage](https:&#x2F;&#x2F;github.com&#x2F;AppImage) con un&#39;esperienza senza installer per &#x2F;Applications
- Mantenere per il più possibile la commpatibilità con FreeBSD e X11 - lasciando come base un ambiente standard Unix 
- Compatibilità con i file binari di Linux tramite il supporto Linux di FreeBSD
- Eventuale compatibilità con i file binari x86-64 di macOS (Mach-O) e delle sue librerie
- Piacevole da usare, sicuro, stabile e performante

Visita [ravynos.com](https:&#x2F;&#x2F;ravynos.com&#x2F;) per più informazioni (in inglese): [Note di rilascio](https:&#x2F;&#x2F;ravynos.com&#x2F;releases.html) | [Screenshots](https:&#x2F;&#x2F;ravynos.com&#x2F;screenshots.html) | [FAQ](https:&#x2F;&#x2F;ravynos.com&#x2F;faq.html)
### Vieni a far parte del progetto!

* Il nostro server [Discord](https:&#x2F;&#x2F;discord.com&#x2F;invite&#x2F;8caJbAGNwY)
* &#x60;#airyx:matrix.org&#x60; - entra tramite [Element.io](https:&#x2F;&#x2F;app.element.io&#x2F;#&#x2F;room&#x2F;#airyx:matrix.org)
* &#x60;#airyx&#x60; su [Libera IRC](https:&#x2F;&#x2F;web.libera.chat&#x2F;?channel&#x3D;#airyx)

_(note: &#x60;#airyx&#x60; su matrix.org e IRC sono collegate col canale &#x60;#general&#x60; su Discord, solo in lingua inglese)_

Logo e design sono stati creati da [nayaabkhan](https:&#x2F;&#x2F;nayaabkhan.me). Si ringrazia [llui85](https:&#x2F;&#x2F;github.com&#x2F;llui85) per l&#39;albero di palme.

[![Packages hosted by: Cloudsmith](https:&#x2F;&#x2F;img.shields.io&#x2F;badge&#x2F;OSS%20hosting%20by-cloudsmith-blue?logo&#x3D;cloudsmith&amp;style&#x3D;flat-square)](https:&#x2F;&#x2F;cloudsmith.com)

---

FreeBSD Source:
---------------
This is the top level of the FreeBSD source directory.  This file
was last revised on:
$FreeBSD$

FreeBSD is an operating system used to power modern servers,
desktops, and embedded platforms. A large community has
continually developed it for more than thirty years. Its
advanced networking, security, and storage features have
made FreeBSD the platform of choice for many of the
busiest web sites and most pervasive embedded networking
and storage devices.

For copyright information, please see the file COPYRIGHT in this
directory. Additional copyright information also exists for some
sources in this tree - please see the specific source directories for
more information.

The Makefile in this directory supports a number of targets for
building components (or all) of the FreeBSD source tree.  See build(7), config(8),
https:&#x2F;&#x2F;www.freebsd.org&#x2F;doc&#x2F;en_US.ISO8859-1&#x2F;books&#x2F;handbook&#x2F;makeworld.html, and
https:&#x2F;&#x2F;www.freebsd.org&#x2F;doc&#x2F;en_US.ISO8859-1&#x2F;books&#x2F;handbook&#x2F;kernelconfig.html
for more information, including setting make(1) variables.

Source Roadmap:
---------------
| Directory | Description |
| --------- | ----------- |
| bin | System&#x2F;user commands. |
| cddl | Various commands and libraries under the Common Development and Distribution License. |
| contrib | Packages contributed by 3rd parties. |
| crypto | Cryptography stuff (see [crypto&#x2F;README](crypto&#x2F;README)). |
| etc | Template files for &#x2F;etc. |
| gnu | Commands and libraries under the GNU General Public License (GPL) or Lesser General Public License (LGPL). Please see [gnu&#x2F;COPYING](gnu&#x2F;COPYING) and [gnu&#x2F;COPYING.LIB](gnu&#x2F;COPYING.LIB) for more information. |
| include | System include files. |
| kerberos5 | Kerberos5 (Heimdal) package. |
| lib | System libraries. |
| libexec | System daemons. |
| release | Release building Makefile &amp; associated tools. |
| rescue | Build system for statically linked &#x2F;rescue utilities. |
| sbin | System commands. |
| secure | Cryptographic libraries and commands. |
| share | Shared resources. |
| stand | Boot loader sources. |
| sys | Kernel sources. |
| sys&#x2F;&#x60;arch&#x60;&#x2F;conf | Kernel configuration files. GENERIC is the configuration used in release builds. NOTES contains documentation of all possible entries. |
| tests | Regression tests which can be run by Kyua.  See [tests&#x2F;README](tests&#x2F;README) for additional information. |
| tools | Utilities for regression testing and miscellaneous tasks. |
| usr.bin | User commands. |
| usr.sbin | System administration commands. |

For information on synchronizing your source tree with one or more of the FreeBSD Project&#39;s development branches, please see: [FreeBSD Handbook](https:&#x2F;&#x2F;docs.freebsd.org&#x2F;en&#x2F;books&#x2F;handbook&#x2F;cutting-edge&#x2F;#current-stable).
