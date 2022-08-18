
  [![Deutsch](https://img.shields.io/badge/🇩🇪-Deutsch-inactive)](https://github.com/prolixalias/ravynos/blob/potential_readme_discussion/i18n/rendered/README.de_DE.md)    [![English](https://img.shields.io/badge/🇬🇧-English-inactive)](https://github.com/prolixalias/ravynos/blob/potential_readme_discussion/i18n/rendered/README.en_GB.md)    [![Indonesia](https://img.shields.io/badge/🇮🇩-Indonesia-inactive)](https://github.com/prolixalias/ravynos/blob/potential_readme_discussion/i18n/rendered/README.id_ID.md)    [![Italiano](https://img.shields.io/badge/🇮🇹-Italiano-inactive)](https://github.com/prolixalias/ravynos/blob/potential_readme_discussion/i18n/rendered/README.it_IT.md)    [![Türkçe](https://img.shields.io/badge/🇹🇷-Türkçe-2ea44f)](https://github.com/prolixalias/ravynos/blob/potential_readme_discussion/i18n/rendered/README.tr_TR.md)     
<p align="left"><h1> ravynOS Nedir? </h1></p>
<p>

[![Build Status](https://api.cirrus-ci.com/github/ravynsoft/ravynos.svg?branch=main)](https://cirrus-ci.com/github/ravynsoft/ravynos) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

</p>

ravynOS macOS ile x86-64(ve ARM) mimarisinde uyumluluk sağlamayı ve benzer bir deneyim sunmayı amaçlayan açık kaynaklı bir işletim sistemidir. FreeBSD&#39;nin sağlam temelleri üzerine inşa edilmiş olup hali hazırda bulunan açık kaynaklı paketleri ve boşlukları doldurmak için kendi kodunu kullanır.

Projenin temel amaçları:
- macOS programları ile kaynak kodu uyumluluğu (Örn. bir Mac programını rayvnOS üzerinde derleyip onu sorunsuz bir şekilde çalıştırabilirsiniz)
- Benzer GUI metaforları ve benzer kullanıcı deneyimi (dosya yöneticisi, uygulama başlatıcısı, açık olan uygulama ile çalışan menü çubuğu)
- macOS dosya düzeni ile uyumluluk (&#x2F;Library, &#x2F;System, &#x2F;Users, &#x2F;Volumes, vb) ve muhtemel dosya sistemleri (HFS+, APFS) ilave olarakta ZFS dosya sistemi ile uyumluluk
- [App Bundles](https:&#x2F;&#x2F;developer.apple.com&#x2F;documentation&#x2F;foundation&#x2F;bundle), [AppDirs](https:&#x2F;&#x2F;github.com&#x2F;AppImage&#x2F;AppImageKit&#x2F;wiki&#x2F;AppDir) ve [AppImage](https:&#x2F;&#x2F;github.com&#x2F;AppImage) formatlarında bağımsız ve &#x2F;Applications için kuruluma ihtiyaç duymayan bir deneyim 
- FreeBSD ve X11 ile uyumluluğu korumak - kaputun altında standart bir Unix ortamı
- FreeBSD&#39;nin Linux desteği sayesinde Linux programları ile uyumludur
- x86-64&#x2F;arm64 macOS programları (Mach-O) ve kütüphaneleri ile nihai uyumluluk
- Kullanımı keyifli, güvenli, kararlı ve performanslı

Daha fazla bilgi için lütfen [ravynos.com](https:&#x2F;&#x2F;ravynos.com&#x2F;) adresini ziyaret edin ziyaret edin:
[Release Notes](https:&#x2F;&#x2F;ravynos.com&#x2F;releases.html) | [Screenshots](https:&#x2F;&#x2F;ravynos.com&#x2F;screenshots.html) | [FAQ](https:&#x2F;&#x2F;ravynos.com&#x2F;faq.html)

### Bize katılın!

* Hayalimdekini gerçekleştirmede bize yardım edebilirmisin? Projenin şu anki ihtiyaç duyduğu şeyleri [CONTRIBUTING.md](CONTRIBUTING.md) üzerinde bulabilirsin!
* [Discord](https:&#x2F;&#x2F;discord.com&#x2F;invite&#x2F;8caJbAGNwY) sunucumuz.
* &#x60;#airyx:matrix.org&#x60; - [Element.io](https:&#x2F;&#x2F;app.element.io&#x2F;#&#x2F;room&#x2F;#airyx:matrix.org) ile katılın
* [Libera IRC](https:&#x2F;&#x2F;web.libera.chat&#x2F;?channel&#x3D;#airyx)&#39;de &#x60;#airyx&#x60;

_(not: matrix.org üzerindeki &#x60;#airyx&#x60; ve IRC kanalları Discord sunucumuzdaki &#x60;#general&#x60; kanalı ile bağlantılıdır.)_

Yeni logo tasarımı &amp; sanat eseri [nayaabkhan](https:&#x2F;&#x2F;nayaabkhan.me) tarafından yapılmıştır. 
Palmiye ağacı konsepti için [llui85](https:&#x2F;&#x2F;github.com&#x2F;llui85) saygılar. 


[![Packages hosted by: Cloudsmith](https:&#x2F;&#x2F;img.shields.io&#x2F;badge&#x2F;OSS%20hosting%20by-cloudsmith-blue?logo&#x3D;cloudsmith&amp;style&#x3D;flat-square)](https:&#x2F;&#x2F;cloudsmith.com)

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
