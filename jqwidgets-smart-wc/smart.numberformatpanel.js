
/* Smart HTML Elements v4.4.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart.Utilities.Assign("CurrencyFormatPanel",class{constructor(a,b="en",c=""){const d=this;d.currencies=[{currency:"US Dollar",sign:"$",abbreviation:"USD"},{currency:"Afghan Afghani",sign:"Af.",abbreviation:"AFN"},{currency:"Albanian Lek",sign:"Lek",abbreviation:"ALL"},{currency:"Algerian Dinar",sign:"din",abbreviation:"DZD"},{currency:"Angolan Kwanza",sign:"Kz",abbreviation:"AOA"},{currency:"Argentine Peso",sign:"$",abbreviation:"ARS"},{currency:"Armenian Dram",sign:"Dram",abbreviation:"AMD"},{currency:"Aruban Florin",sign:"Afl.",abbreviation:"AWG"},{currency:"Australian Dollar",sign:"$",abbreviation:"AUD"},{currency:"Azerbaijani Manat",sign:"\u20BC",abbreviation:"AZN"},{currency:"Bahamian Dollar",sign:"$",abbreviation:"BSD"},{currency:"Bahraini Dinar",sign:"din",abbreviation:"BHD"},{currency:"Bangladeshi Taka",sign:"\u09F3",abbreviation:"BDT"},{currency:"Barbadian Dollar",sign:"$",abbreviation:"BBD"},{currency:"Belarusian Ruble",sign:"\u0440.",abbreviation:"BYN"},{currency:"Belarusian Ruble",sign:"\u0440.",abbreviation:"BYR"},{currency:"Belize Dollar",sign:"$",abbreviation:"BZD"},{currency:"Bermudan Dollar",sign:"$",abbreviation:"BMD"},{currency:"Bhutanese Ngultrum",sign:"Nu.",abbreviation:"BTN"},{currency:"Bolivian Boliviano",sign:"Bs",abbreviation:"BOB"},{currency:"Bosnia-Herzegovina Convertible Mark",sign:"KM",abbreviation:"BAM"},{currency:"Botswanan Pula",sign:"P",abbreviation:"BWP"},{currency:"Brazilian Real",sign:"R$",abbreviation:"BRL"},{currency:"British Pound Sterling",sign:"\xA3",abbreviation:"GBP"},{currency:"Brunei Dollar",sign:"$",abbreviation:"BND"},{currency:"Bulgarian Lev",sign:"lev",abbreviation:"BGN"},{currency:"Burundian Franc",sign:"FBu",abbreviation:"BIF"},{currency:"Cambodian Riel",sign:"Riel",abbreviation:"KHR"},{currency:"Canadian Dollar",sign:"$",abbreviation:"CAD"},{currency:"Cape Verdean Escudo",sign:"CVE",abbreviation:"CVE"},{currency:"Cayman Islands Dollar",sign:"$",abbreviation:"KYD"},{currency:"CFA Franc BCEAO",sign:"CFA",abbreviation:"XOF"},{currency:"CFA Franc BEAC",sign:"FCFA",abbreviation:"XAF"},{currency:"CFP Franc",sign:"FCFP",abbreviation:"XPF"},{currency:"Chilean Peso",sign:"$",abbreviation:"CLP"},{currency:"Chinese Yuan",sign:"\xA5",abbreviation:"CNY"},{currency:"Chinese Yuan (offshore)",sign:"\xA5",abbreviation:"RMB"},{currency:"Colombian Peso",sign:"$",abbreviation:"COP"},{currency:"Comorian Franc",sign:"CF",abbreviation:"KMF"},{currency:"Congolese Franc",sign:"FrCD",abbreviation:"CDF"},{currency:"Costa Rican Colon",sign:"\u20A1",abbreviation:"CRC"},{currency:"Croatian Kuna",sign:"kn",abbreviation:"HRK"},{currency:"Cuban Convertible Peso",sign:"$",abbreviation:"CUC"},{currency:"Cuban Peso",sign:"$",abbreviation:"CUP"},{currency:"Czech Republic Koruna",sign:"K\u010D",abbreviation:"CZK"},{currency:"Danish Krone",sign:"kr.",abbreviation:"DKK"},{currency:"Djiboutian Franc",sign:"Fdj",abbreviation:"DJF"},{currency:"Dominican Peso",sign:"RD$",abbreviation:"DOP"},{currency:"East Caribbean Dollar",sign:"$",abbreviation:"XCD"},{currency:"Egyptian Pound",sign:"\xA3",abbreviation:"EGP"},{currency:"Eritrean Nakfa",sign:"Nfk",abbreviation:"ERN"},{currency:"Ethiopian Birr",sign:"Birr",abbreviation:"ETB"},{currency:"Euro",sign:"\u20AC",abbreviation:"EUR"},{currency:"Falkland Islands Pound",sign:"\xA3",abbreviation:"FKP"},{currency:"Fijian Dollar",sign:"$",abbreviation:"FJD"},{currency:"Gambian Dalasi",sign:"GMD",abbreviation:"GMD"},{currency:"Georgian Lari",sign:"GEL",abbreviation:"GEL"},{currency:"Ghanaian Cedi",sign:"GHS",abbreviation:"GHS"},{currency:"Gibraltar Pound",sign:"\xA3",abbreviation:"GIP"},{currency:"Guatemalan Quetzal",sign:"Q",abbreviation:"GTQ"},{currency:"Guinean Franc",sign:"FG",abbreviation:"GNF"},{currency:"Guyanaese Dollar",sign:"$",abbreviation:"GYD"},{currency:"Haitian Gourde",sign:"HTG",abbreviation:"HTG"},{currency:"Honduran Lempira",sign:"L",abbreviation:"HNL"},{currency:"Hong Kong Dollar",sign:"$",abbreviation:"HKD"},{currency:"Hungarian Forint",sign:"Ft",abbreviation:"HUF"},{currency:"Icelandic Krona",sign:"kr",abbreviation:"ISK"},{currency:"Indian Rupee",sign:"\u20B9",abbreviation:"INR"},{currency:"Indonesian Rupiah",sign:"Rp",abbreviation:"IDR"},{currency:"Iranian Rial",sign:"Rial",abbreviation:"IRR"},{currency:"Iraqi Dinar",sign:"din",abbreviation:""},{currency:"Israeli New Sheqel",sign:" \u20AA",abbreviation:"ILS"},{currency:"Jamaican Dollar",sign:"$",abbreviation:"JMD"},{currency:"Japanese Yen",sign:"\xA5",abbreviation:"JPY"},{currency:"Jordanian Dinar",sign:"din",abbreviation:"JOD"},{currency:"Kazakhstani Tenge",sign:"\u20B8",abbreviation:"KZT"},{currency:"Kenyan Shilling",sign:"Ksh",abbreviation:"KES"},{currency:"Kuwaiti Dinar",sign:"din",abbreviation:"KWD"},{currency:"Kyrgystani Som",sign:"KGS",abbreviation:"KGS"},{currency:"Laotian Kip",sign:"\u20AD",abbreviation:"LAK"},{currency:"Lebanese Pound",sign:"L\xA3",abbreviation:"LBP"},{currency:"Lesotho Loti",sign:"LSL",abbreviation:"LSL"},{currency:"Liberian Dollar",sign:"$",abbreviation:"LRD"},{currency:"Libyan Dinar",sign:"din",abbreviation:"LYD"},{currency:"Lithuanian Litas",sign:"Lt",abbreviation:"LTL"},{currency:"Macanese Pataca",sign:"MOP",abbreviation:"MOP"},{currency:"Macedonian Denar",sign:"din",abbreviation:"MKD"},{currency:"Malagasy Ariary",sign:"Ar",abbreviation:"MGA"},{currency:"Malawian Kwacha",sign:"MWK",abbreviation:"MWK"},{currency:"Malaysian Ringgit",sign:"RM",abbreviation:"MYR"},{currency:"Maldivian Rufiyaa",sign:"Rf",abbreviation:"MVR"},{currency:"Mauritanian Ouguiya",sign:"MRO",abbreviation:"MRO"},{currency:"Mauritian Rupee",sign:"MURs",abbreviation:"MUR"},{currency:"Mexican Peso",sign:"$",abbreviation:"MXN"},{currency:"Moldovan Leu",sign:"MDL",abbreviation:"MDL"},{currency:"Mongolian Tugrik",sign:"\u20AE",abbreviation:"MNT"},{currency:"Moroccan Dirham",sign:"dh",abbreviation:"MAD"},{currency:"Mozambican Metical",sign:"MTn",abbreviation:"MZN"},{currency:"Myanma Kyat",sign:"K",abbreviation:"MMK"},{currency:"Namibian Dollar",sign:"$",abbreviation:"NAD"},{currency:"Nepalese Rupee",sign:"Rs",abbreviation:"NPR"},{currency:"Netherlands Antillean Guilder",sign:"NAf.",abbreviation:"ANG"},{currency:"New Taiwan Dollar",sign:"NT$",abbreviation:"TWD"},{currency:"New Zealand Dollar",sign:"$",abbreviation:"NZD"},{currency:"Nicaraguan Cordoba",sign:"C$",abbreviation:"NIO"},{currency:"Nigerian Naira",sign:"\u20A6",abbreviation:"NGN"},{currency:"North Korean Won",sign:"\u20A9KP",abbreviation:"KPW"},{currency:"Norwegian Krone",sign:"kr",abbreviation:"NOK"},{currency:"Omani Rial",sign:"Rial",abbreviation:"OMR"},{currency:"Pakistani Rupee",sign:"Rs",abbreviation:"PKR"},{currency:"Panamanian Balboa",sign:"B/.",abbreviation:"PAB"},{currency:"Papua New Guinean Kina",sign:"PGK",abbreviation:"PGK"},{currency:"Paraguayan Guarani",sign:"Gs.",abbreviation:"PYG"},{currency:"Peruvian Nuevo Sol",sign:"S/.",abbreviation:"PEN"},{currency:"Philippine Peso",sign:"\u20B1",abbreviation:"PHP"},{currency:"Polish Zloty",sign:"z\u0142",abbreviation:"PLN"},{currency:"Qatari Rial",sign:"Rial",abbreviation:"QAR"},{currency:"Romanian Leu",sign:"RON",abbreviation:"RON"},{currency:"Russian Ruble",sign:"\u20BD",abbreviation:"RUB"},{currency:"Rwandan Franc",sign:"RF",abbreviation:"RWF"},{currency:"Saint Helena Pound",sign:"\xA3",abbreviation:"SHP"},{currency:"Samoan Tala",sign:"WST",abbreviation:"WST"},{currency:"Sao Tomean Dobra",sign:"Db",abbreviation:"STD"},{currency:"Saudi Riyal",sign:"Rial",abbreviation:"SAR"},{currency:"Serbian Dinar",sign:"din",abbreviation:"RSD"},{currency:"Seychellois Rupee",sign:"SCR",abbreviation:"SCR"},{currency:"Sierra Leonean Leone",sign:"SLL",abbreviation:"SLL"},{currency:"Singapore Dollar",sign:"$",abbreviation:"SGD"},{currency:"Solomon Islands Dollar",sign:"$",abbreviation:"SBD"},{currency:"Somali Shilling",sign:"SOS",abbreviation:"SOS"},{currency:"South African Rand",sign:"R",abbreviation:"ZAR"},{currency:"South Korean Won",sign:"\u20A9",abbreviation:"KRW"},{currency:"South Sudanese Pound",sign:"\xA3",abbreviation:"SSP"},{currency:"Sri Lankan Rupee",sign:"Rs",abbreviation:"LKR"},{currency:"Sudanese Pound",sign:"SDG",abbreviation:"SDG"},{currency:"Surinamese Dollar",sign:"$",abbreviation:"SRD"},{currency:"Swazi Lilangeni",sign:"SZL",abbreviation:"SZL"},{currency:"Swedish Krona",sign:"kr",abbreviation:"SEK"},{currency:"Swiss Franc",sign:"CHF",abbreviation:"CHF"},{currency:"Syrian Pound",sign:"\xA3",abbreviation:"SYP"},{currency:"Tajikistani Somoni",sign:"Som",abbreviation:"TJS"},{currency:"Tanzanian Shilling",sign:"TSh",abbreviation:"TZS"},{currency:"Thai Baht",sign:"\u0E3F",abbreviation:"THB"},{currency:"Tongan Pa'anga",sign:"T$",abbreviation:"TOP"},{currency:"Trinidad and Tobago Dollar",sign:"$",abbreviation:"TTD"},{currency:"Tunisian Dinar",sign:"din",abbreviation:"TND"},{currency:"Turkish Lira",sign:"\u20BA",abbreviation:"TRY"},{currency:"Turkmenistani Manat",sign:"m",abbreviation:"TMT"},{currency:"Ugandan Shilling",sign:"UGX",abbreviation:"UGX"},{currency:"Ukrainian Hryvnia",sign:"\u0433\u0440\u043D.",abbreviation:"UAH"},{currency:"United Arab Emirates Dirham",sign:"dh",abbreviation:"AED"},{currency:"Uruguayan Peso",sign:"$",abbreviation:"UYU"},{currency:"Uzbekistan Som",sign:"so\u02BCm",abbreviation:"UZS"},{currency:"Vanuatu Vatu",sign:"VUV",abbreviation:"VUV"},{currency:"Venezuelan Bolivar",sign:"Bs",abbreviation:"VEF"},{currency:"Venezuelan Bolivar",sign:"Bs",abbreviation:"VES"},{currency:"Vietnamese Dong",sign:"\u20AB",abbreviation:"VND"},{currency:"Yemeni Rial",sign:"Rial",abbreviation:"YER"},{currency:"Zambian Kwacha",sign:"ZMW",abbreviation:"ZMW"},{currency:"Zimbabwean Dollar",sign:"$",abbreviation:"ZWD"}],d.mainContainer=document.querySelector(a),d.selectedCurrencyFullValue="1,000.00",d.selectedCurrencyValue="1,000",d.demoContainerHolder=document.createElement("div"),d.demoContainerHolder.classList.add("currency-format-panel-demo-container"),d._setLocalizationSettings(b,c),d._generateSelectedCurrencyHolderAndApply(),d._generateCurrencyHolder(),d.mainContainer.appendChild(d.demoContainerHolder)}_setLocalizationSettings(a,b){const c=this;c.locale=a,c.messages=b,c.defaultLocale="en",c.defaultMessages={en:{apply:"apply"}},c.messages||(c.messages=c.defaultMessages),c.messages[c.locale]||(c.messages[c.defaultLocale]?c.locale=c.defaultLocale:(c.messages=c.defaultMessages,c.locale=c.defaultLocale))}_generateSelectedCurrencyHolderAndApply(){const a=this;let b=document.createElement("div");b.classList.add("selected-currency-holder-and-apply-holder");let c=document.createElement("div");c.classList.add("selected-currency-holder");let d=document.createElement("div");d.classList.add("currency-sign-input-holder"),a.currencySignTextBox=document.createElement("smart-text-box"),a.currencySignTextBox.classList.add("currency-sign-input");const e=()=>a._filterCurrencies();a.currencySignTextBox.addEventListener("keyup",e),a.currencySignTextBox["currency-sign-input"]=e,d.appendChild(a.currencySignTextBox),c.appendChild(d);let f=document.createElement("div");f.classList.add("currency-smart-input-holder"),a.inputCurrencyFormats=document.createElement("smart-input"),a.inputCurrencyFormats.dropDownWidth="auto",a.inputCurrencyFormats.dropDownButtonPosition="right",a.inputCurrencyFormats.readonly=!0,a.inputCurrencyFormats.classList.add("input-currency-formats"),f.appendChild(a.inputCurrencyFormats),c.appendChild(f);let g=document.createElement("div");g.classList.add("apply-button-holder"),a.applyButton=document.createElement("smart-button"),a.applyButton.classList.add("use-format-button"),a.applyButton.classList.add("success"),a.applyButton.innerHTML=a.messages[a.locale].apply?a.messages[a.locale].apply:a.defaultMessages[a.defaultLocale].apply;const h=()=>a.value=a.getFormat();a.applyButton.addEventListener("click",h),a.applyButton["apply-button-event-listener"]=h,g.appendChild(a.applyButton),b.appendChild(c),b.appendChild(g),a.demoContainerHolder.appendChild(b)}detach(){const a=this;a._removeEventListeners()}_removeEventListeners(){const a=this;a.currencySignTextBox.removeEventListener("keyup",a.currencySignTextBox["currency-sign-input"]),delete a.currencySignTextBox["currency-sign-input"],a.applyButton.removeEventListener("click",a.applyButton["apply-button-event-listener"]),delete a.applyButton["apply-button-event-listener"];let b=document.querySelectorAll(".currency-item");for(let a=0;a<b.length;a++){let c=b[a],d=b[a].dataset.currency;c.removeEventListener("click",c[d]),delete c[d]}}getFormat(){const a=this;let b,c=a.inputCurrencyFormats.value;return c.includes(a.selectedCurrencyFullValue)?b=c.replace(a.selectedCurrencyFullValue,"\"#,#.00\""):c.includes(a.selectedCurrencyValue)&&(b=c.replace(a.selectedCurrencyValue,"\"#,#\"")),b="'\""+b+"\"'",b}_generateCurrencyHolder(){const a=this;a.currencyHolder=document.createElement("div"),a.currencyHolder.classList.add("currency-list"),a._setCurrencies(a.currencies),a.demoContainerHolder.appendChild(a.currencyHolder)}_setCurrencies(a){const b=this;b.currencyHolder.innerHTML="";for(let c=0;c<a.length;c++){let d=a[c],e=a[c].currency,f=a[c].sign,g=document.createElement("div");g.classList.add("currency-item"),g.innerHTML=e,g.dataset.currency=e.replace(" ","_")+"_"+c;let h=document.createElement("div");h.classList.add("currency-item-default-format"),h.innerHTML=f+" "+b.selectedCurrencyFullValue,g.appendChild(h),b.currencyHolder.appendChild(g),0==c&&b.useThisFormat(d);const i=()=>b.useThisFormat(d);g.addEventListener("click",i),g[e.replace(" ","_")+"_"+c]=i}}_filterCurrencies(){const a=this;let b=a.currencySignTextBox.value.toLowerCase(),c=[];for(let d,e=0;e<a.currencies.length;e++)d=a.currencies[e].currency.toLowerCase(),-1!==d.indexOf(b)&&c.push(a.currencies[e]);a._setCurrencies(c);let d=[];0!==b.length&&(d.push(b+a.selectedCurrencyFullValue),d.push(b+a.selectedCurrencyValue)),d.push(a.selectedCurrencyFullValue+b),d.push(a.selectedCurrencyValue+b),a.inputCurrencyFormats.dataSource=d,a.inputCurrencyFormats.value=d[0]}useThisFormat(a){const b=this;let c=a.sign,d=a.abbreviation;b.currencySignTextBox.value=c;let e=[];e.push(c+b.selectedCurrencyFullValue),e.push(d+" "+c+b.selectedCurrencyFullValue),e.push(c+b.selectedCurrencyValue),e.push(b.selectedCurrencyFullValue+c),e.push(b.selectedCurrencyValue+c),b.inputCurrencyFormats.dataSource=e,b.inputCurrencyFormats.value=e[0]}}),Smart.Utilities.Assign("NumberFormatPanel",class{constructor(a,b="en",c=""){const d=this;d.formats=["0","0.00","#,##0","#,##0.00","#,##0_);(#,##0)","$#,##0_);($#,##0)","#,##0.00_);(#,##0.00)","$#,##0.00_);($#,##0.00)","@","0%","0.00%","0.00E+00","##0.0E+0","# ?/?","# ??/??","_($* #,##0_);_($* (#,##0);_($* \"-\"_);_(@_)","_(* #,##0_);_(* (#,##0);_(* \"-\"_);_(@_)","_($* #,##0.00_);_($* (#,##0.00);_($* \"-\"??_);_(@_)","_(* #,##0.00_);_(* (#,##0.00);_(* \"-\"??_);_(@_)"],d.sampleDemoValue=1234.56,d.mainContainer=document.querySelector(a),d.demoContainerHolder=document.createElement("div"),d.demoContainerHolder.classList.add("number-format-panel-demo-container"),d._setLocalizationSettings(b,c),d._generateSelectedNumberFormatHolderAndApply(),d._generateExampleContainer(),d._generateCustomFormatsHolder(),d.useThisFormat(d.initialCustomNumberFormatValue),d.mainContainer.appendChild(d.demoContainerHolder)}_setLocalizationSettings(a,b){const c=this;c.locale=a,c.messages=b,c.defaultLocale="en",c.defaultMessages={en:{apply:"apply",sample:"Sample",positive:"Positive",negative:"Negative",zero:"Zero",text:"Text"}},c.messages||(c.messages=c.defaultMessages),c.messages[c.locale]||(c.messages[c.defaultLocale]?c.locale=c.defaultLocale:(c.messages=c.defaultMessages,c.locale=c.defaultLocale))}_generateSelectedNumberFormatHolderAndApply(){const a=this;let b=document.createElement("div");b.classList.add("selected-custom-number-format-holder-and-apply-holder");let c=document.createElement("div");c.classList.add("selected-custom-number-format-holder");let d=document.createElement("div");d.classList.add("custom-number-format-input-holder"),a.customNumberFormatTextBox=document.createElement("smart-text-box"),a.customNumberFormatTextBox.classList.add("custom-number-format-input");const e=()=>a._filterCustomFormat();a.customNumberFormatTextBox.addEventListener("keyup",e),a.customNumberFormatTextBox["custom-number-format-input"]=e,d.appendChild(a.customNumberFormatTextBox),c.appendChild(d);let f=document.createElement("div");f.classList.add("apply-button-holder"),a.applyButton=document.createElement("smart-button"),a.applyButton.classList.add("use-number-format-button"),a.applyButton.classList.add("success"),a.applyButton.innerHTML=a.messages[a.locale].apply?a.messages[a.locale].apply:a.defaultMessages[a.defaultLocale].apply;const g=()=>a.value=a.getFormat();a.applyButton.addEventListener("click",g),a.applyButton["apply-button-event-listener"]=g,f.appendChild(a.applyButton),b.appendChild(c),b.appendChild(f),a.demoContainerHolder.appendChild(b)}detach(){const a=this;a._removeEventListeners()}_removeEventListeners(){const a=this;a.customNumberFormatTextBox.removeEventListener("keyup",a.customNumberFormatTextBox["custom-number-format-input"]),delete a.customNumberFormatTextBox["custom-number-format-input"],a.applyButton.removeEventListener("click",a.applyButton["apply-button-event-listener"]),delete a.applyButton["apply-button-event-listener"];let b=document.querySelectorAll(".custom-number-format-item");for(let a,c=0;c<b.length;c++)a=b[c],a.removeEventListener("click",a[c]),delete a[c]}getFormat(){const a=this;return a.customNumberFormatTextBox.value}_generateExampleContainer(){const a=this;let b=document.createElement("div");b.classList.add("sample-container"),a.sampleTextHolder=document.createElement("div"),a.sampleTextHolder.classList.add("sample-text-container"),a.positiveTextHolder=document.createElement("div"),a.positiveTextHolder.classList.add("positive-text-container"),a.negativeTextHolder=document.createElement("div"),a.negativeTextHolder.classList.add("negative-text-container"),a.zeroTextHolder=document.createElement("div"),a.zeroTextHolder.classList.add("zero-text-container"),a.textHolder=document.createElement("div"),a.textHolder.classList.add("text-container"),b.appendChild(a.sampleTextHolder),b.appendChild(a.positiveTextHolder),b.appendChild(a.negativeTextHolder),b.appendChild(a.zeroTextHolder),b.appendChild(a.textHolder),a.demoContainerHolder.appendChild(b)}_generateCustomFormatsHolder(){const a=this;a.customNumberFormatHolder=document.createElement("div"),a.customNumberFormatHolder.classList.add("custom-number-format-list"),a._setNumberFormats(a.formats),a.demoContainerHolder.appendChild(a.customNumberFormatHolder)}_setNumberFormats(a){const b=this;b.customNumberFormatHolder.innerHTML="";for(let c=0;c<a.length;c++){let d=a[c],e=document.createElement("div");e.classList.add("custom-number-format-item"),e.innerHTML=d;let f=document.createElement("div");f.classList.add("custom-number-format-item-default-format"),f.innerHTML=new Smart.Utilities.NumberRenderer().formatNumber(b.sampleDemoValue,d),e.appendChild(f),b.customNumberFormatHolder.appendChild(e),0==c&&(b.initialCustomNumberFormatValue=d);const g=()=>b.useThisFormat(d);e.addEventListener("click",g),e[c]=g}}_filterCustomFormat(){const a=this;let b=a.customNumberFormatTextBox.value,c=[];for(let d,e=0;e<a.formats.length;e++)d=a.formats[e],-1!==d.indexOf(b)&&c.push(a.formats[e]);a._setNumberFormats(c),a.useThisFormat(b)}useThisFormat(a){var b=Math.abs;const c=this;let d="",e="",f="",g="",h="",i=(c.messages[c.locale].sample?c.messages[c.locale].sample:c.defaultMessages[c.defaultLocale].sample)+": "+new Smart.Utilities.NumberRenderer().formatNumber(c.sampleDemoValue,a),j=(c.messages[c.locale].positive?c.messages[c.locale].positive:c.defaultMessages[c.defaultLocale].positive)+": "+new Smart.Utilities.NumberRenderer().formatNumber(b(c.sampleDemoValue),a),k=(c.messages[c.locale].negative?c.messages[c.locale].negative:c.defaultMessages[c.defaultLocale].negative)+": "+new Smart.Utilities.NumberRenderer().formatNumber(-b(c.sampleDemoValue),a),l=(c.messages[c.locale].zero?c.messages[c.locale].zero:c.defaultMessages[c.defaultLocale].zero)+": "+new Smart.Utilities.NumberRenderer().formatNumber(0,a),m=(c.messages[c.locale].text?c.messages[c.locale].text:c.defaultMessages[c.defaultLocale].text)+": "+new Smart.Utilities.NumberRenderer().formatNumber(c.messages[c.locale].text.toLowerCase()?c.messages[c.locale].text.toLowerCase():c.defaultMessages[c.defaultLocale].text.toLowerCase(),a);var n=(a.match(/;/g)||[]).length;if(0===n?d=i:1===n?(e=j,f=k):2===n?(e=j,f=k,g=l):(e=j,f=k,g=l,h=m),c.sampleTextHolder.innerHTML=d,c.positiveTextHolder.innerHTML=e,c.negativeTextHolder.innerHTML=f,c.zeroTextHolder.innerHTML=g,c.textHolder.innerHTML=h,c.customNumberFormatTextBox.value=a,null===c.demoContainerHolder.querySelector(".custom-number-format-item"))c.demoContainerHolder.querySelector(".custom-number-format-list").classList.add("smart-hidden");else{let a=c.demoContainerHolder.querySelector(".custom-number-format-list").classList;for(let b=0;b<a.length;b++)if("smart-hidden"===a[b]){a.remove("smart-hidden");continue}}}});