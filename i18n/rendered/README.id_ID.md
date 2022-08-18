
  [![Deutsch](https://img.shields.io/badge/🇩🇪-Deutsch-inactive)](https://github.com/prolixalias/ravynos/blob/potential_readme_discussion/i18n/rendered/README.de_DE.md)    [![English](https://img.shields.io/badge/🇬🇧-English-inactive)](https://github.com/prolixalias/ravynos/blob/potential_readme_discussion/i18n/rendered/README.en_GB.md)    [![Indonesia](https://img.shields.io/badge/🇮🇩-Indonesia-2ea44f)](https://github.com/prolixalias/ravynos/blob/potential_readme_discussion/i18n/rendered/README.id_ID.md)    [![Italiano](https://img.shields.io/badge/🇮🇹-Italiano-inactive)](https://github.com/prolixalias/ravynos/blob/potential_readme_discussion/i18n/rendered/README.it_IT.md)    [![Türkçe](https://img.shields.io/badge/🇹🇷-Türkçe-inactive)](https://github.com/prolixalias/ravynos/blob/potential_readme_discussion/i18n/rendered/README.tr_TR.md)     
<p align="left"><h1> Apa itu ravynOS? </h1></p>
<p>

[![Build Status](https://api.cirrus-ci.com/github/ravynsoft/ravynos.svg?branch=main)](https://cirrus-ci.com/github/ravynsoft/ravynos) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

</p>

ravynOS adalah proyek OS open source baru yang bertujuan untuk memberikan pengalaman serupa dan beberapa kompatibilitas dengan macOS pada sistem x86-64 (dan akhirnya ARM). Itu dibangun di atas dasar FreeBSD yang kokoh, paket open source yang ada di ruang yang sama, dan kode baru untuk mengisi kekosongan.

Tujuan utama desain adalah:
- Kompatibilitas sumber dengan aplikasi macOS (yaitu Anda dapat mengkompilasi aplikasi Mac di ravynOS dan menjalankannya)
- Metafora GUI serupa dan UX yang sudah dikenal (manajer file, peluncur aplikasi, bilah menu atas yang mencerminkan aplikasi terbuka, dll)
- Kompatibel dengan tata letak folder macOS (&#x2F; Perpustakaan, &#x2F; Sistem, &#x2F; Pengguna, &#x2F; Volume, dll) dan mungkin sistem file (HFS +, APFS) serta sepenuhnya mendukung ZFS
- Aplikasi mandiri di [App Bundle](https:&#x2F;&#x2F;developer.apple.com&#x2F;documentation&#x2F;foundation&#x2F;bundle), [AppDirs](https:&#x2F;&#x2F;github.com&#x2F;AppImage&#x2F;AppImageKit&#x2F;wiki&#x2F;AppDir), dan file [AppImage](https:&#x2F;&#x2F;github.com&#x2F;AppImage) - pengalaman tanpa penginstal untuk &#x2F;Applications
- Sebagian besar mempertahankan kompatibilitas dengan sistem dasar FreeBSD dan X11 - lingkungan Unix standar di bawah tenda
- Kompatibel dengan binari Linux melalui dukungan Linux FreeBSD
- Kompatibilitas akhirnya dengan binari macOS x86-64&#x2F;arm64 (Mach-O) dan library
- Menyenangkan untuk digunakan, aman, stabil, dan berkinerja

Kunjungi [ravynos.com](https:&#x2F;&#x2F;ravynos.com&#x2F;) untuk info selengkapnya: [Catatan Rilis](https:&#x2F;&#x2F;ravynos.com&#x2F;releases.html) | [Screenshot](https:&#x2F;&#x2F;ravynos.com&#x2F;screenshots.html) | [FAQ](https:&#x2F;&#x2F;ravynos.com&#x2F;faq.html)

### Bergabunglah dengan kami!

* Dapatkah Anda membantu membangun mimpi? Lihat proyek&#x2F;kebutuhan saat ini di [CONTRIBUTING.md](CONTRIBUTING.md)!
* Server [Discord](https:&#x2F;&#x2F;discord.com&#x2F;invite&#x2F;8caJbAGNwY) kami.
* &#x60;#ravynOS-general:matrix.org&#x60; - bergabung melalui [Element.io](https:&#x2F;&#x2F;app.element.io&#x2F;#&#x2F;room&#x2F;%23ravynOS-general:matrix.org)
* &#x60;#airyx&#x60; di [Libera IRC](https:&#x2F;&#x2F;web.libera.chat&#x2F;?channel&#x3D;#airyx)

[![Paket dihosting oleh: Cloudsmith](https:&#x2F;&#x2F;img.shields.io&#x2F;badge&#x2F;OSS%20hosting%20by-cloudsmith-blue?logo&#x3D;cloudsmith&amp;style&#x3D;flat-square)](https:&#x2F;&#x2F;cloudsmith.com)

---

FreeBSD Source:
---------------
This is the top level of the FreeBSD source directory.

FreeBSD is an operating system used to power modern servers, desktops, and embedded platforms.
A large community has continually developed it for more than thirty years.
Its advanced networking, security, and storage features have made FreeBSD the platform of choice for many of the busiest web sites and most pervasive embedded networking and storage devices.

For copyright information, please see [the file COPYRIGHT](COPYRIGHT) in this directory.
Additional copyright information also exists for some sources in this tree - please see the specific source directories for more information.

The Makefile in this directory supports a number of targets for building components (or all) of the FreeBSD source tree.
See build(7), config(8), [FreeBSD handbook on building userland](https:&#x2F;&#x2F;docs.freebsd.org&#x2F;en&#x2F;books&#x2F;handbook&#x2F;cutting-edge&#x2F;#makeworld), and [Handbook for kernels](https:&#x2F;&#x2F;docs.freebsd.org&#x2F;en&#x2F;books&#x2F;handbook&#x2F;kernelconfig&#x2F;) for more information, including setting make(1) variables.

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

