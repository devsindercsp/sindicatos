export interface Sindicato {
  name: string
  address: string
  town: string
  city: string
  state: string
  phone: string
  email: string
  website: string
  basedata: string
  coverage: string[]
}

export const sindicatos: Sindicato[] = [
  {
    name: 'FEDERAÇÃO DOS TRABALHADORES EM EMPRESAS DE REFS. COL. EMP. DE REFS. COL., COZ. IND. E AFINS DO ESTADO DE SP',
    address: 'RUA LAVRADIO, 603 – ALTOS',
    town: 'BARRA FUNDA',
    city: 'SÃO PAULO',
    state: 'SP',
    phone: '(11) 5539-0526',
    email: 'contato@fetercesp.org.br',
    website: 'www.fetercesp.org.br',
    basedata: 'Junho',
    coverage: [
      'CANAS',
      'ESPÍRITO SANTO DO PINHAL',
      'JUQUITIBA',
      'PIRANGI',
      'POTIM',
      'PRATÂNIA',
      'REDENÇÃO DA SERRA',
      'SETE BARRAS',
    ],
  },
  {
    name: 'SIND DOS EMPREGADOS NAS EMPRESAS DE REFEIÇÕES COLETIVAS DO ABCDMRP',
    address: 'AVENIDA REDENÇÃO, 450',
    town: 'JARDIM DO MAR',
    city: 'SÃO BERNARDO DO CAMPO',
    state: 'SP',
    phone: '(11) 4330-3674',
    email: 'contato@seercabc.org',
    website: 'www.seercabc.org',
    basedata: 'Junho',
    coverage: [
      'DIADEMA',
      'MAUÁ',
      'RIBEIRÃO PIRES',
      'SANTO ANDRÉ',
      'SÃO BERNARDO DO CAMPO',
      'SÃO CAETANO DO SUL',
    ],
  },
  {
    name: 'SIND DOS EMPREGADOS NAS EMPRESAS REFEICOES COLETIVAS DE S.J. CAMPOS',
    address: 'RUA JOSÉ LEITE DA SILVA, 279',
    town: 'JD. BELA VISTA',
    city: 'SÃO JOSÉ DOS CAMPOS',
    state: 'SP',
    phone: '(12) 3941-5606',
    email: 'seerc@outlook.com',
    website: 'www.radioseercsjc.minharadio.fm',
    basedata: 'Junho',
    coverage: [
      'APARECIDA',
      'ARAPEÍ',
      'AREIAS',
      'BANANAL',
      'CAÇAPAVA',
      'CACHOEIRA PAULISTA',
      'CAMPOS DO JORDÃO',
      'CANAS',
      'CRUZEIRO',
      'CUNHA',
      'GUARATINGUETÁ',
      'IGARATÁ',
      'JACAREÍ',
      'JAMBEIRO',
      'LAGOÍNHA',
      'LAVRINHAS',
      'LORENA',
      'SÃO BENTO DO SAPUCAÍ',
      'SÃO JOSÉ DO BARREIRO',
      'SÃO JOSÉ DOS CAMPOS',
      'SÃO LUIS DO PARAITINGA',
      'SANTA BRANCA',
      'SANTO ANTONIO DO PINHAL',
      'SILVEIRAS',
      'TAUBATÉ',
      'TREMEMBÉ',
    ],
  },
  {
    name: 'SINDICATO DOS EMPREGADOS NAS EMPRESAS DE REFEIÇÕES COLETIVAS DE OSASCO',
    address: 'RUA SILVERIO SASSO, 79, FUNDOS',
    town: 'VILA YARA',
    city: 'OSASCO',
    state: 'SP',
    phone: '(11) 3682-2095',
    email: 'contato@seerco.org.br',
    website: 'www.seerco.org.br',
    basedata: 'Junho',
    coverage: [
      'BARUERI',
      'CARAPICUÍBA',
      'ITAPEVI',
      'JANDIRA',
      'OSASCO',
      'SANTANA DO PARNAÍBA',
    ],
  },
  {
    name: 'SINDICATO DOS NUTRICIONISTAS DO ESTADO DE SÃO PAULO',
    address: 'RUA 24 DE MAIO , 104, 8 ANDAR',
    town: 'CENTRO',
    city: 'SÃO PAULO',
    state: 'SP',
    phone: '(11) 3337-5263 – (11) 3338-2539',
    email: 'recepcao@sindinutrisp.org.br',
    website: 'www.sindinutrisp.org.br',
    basedata: '-',
    coverage: ['TODO ESTADO DE SÃO PAULO'],
  },
  {
    name: 'SINDICATO DOS TRABALHADORES EM REFEIÇÕES COLETIVAS DE COTIA, EMBU DAS ARTES, EMBU GUAÇU, ITAPECERICA DA SERRA E TABOÃO DA SERRA',
    address: 'RUA LAVRADIO, 603 – ALTOS',
    town: 'BARRA FUNDA',
    city: 'SÃO PAULO',
    state: 'SP',
    phone: '(11) 5539-0526',
    email: 'sindirefeicoescotia@gmail.com',
    website: '-',
    basedata: 'Junho',
    coverage: [
      'COTIA',
      'EMBU DAS ARTES',
      'EMBU GUAÇU',
      'ITAPECERICA DA SERRA',
      'TABOÃO DA SERRA',
    ],
  },
  {
    name: 'SIND. TRABALHADORES NAS EMPRESAS DE REFEIÇÕES COLETIVAS DE SUZANO E REGIÃO',
    address: 'RUA AMELIA GUERRA, 147',
    town: 'VILA AMORIM',
    city: 'SUZANO',
    state: 'SP',
    phone: '(11) 4746-2326',
    email: 'adm@sindirefeicoessuzano.com.br',
    website: 'www.sindirefeicoessuzano.org.br',
    basedata: 'JUNHO',
    coverage: [
      'ARUJÁ',
      'BIRITIBA MIRIM',
      'FERRAZ DE VASCONCELOS',
      'GUARAREMA',
      'ITAQUAQUECETUBA',
      'MAIRIPORÃ',
      'MOGI DAS CRUZES',
      'POÁ',
      'SALESÓPOLIS',
      'SANTA IZABEL',
      'SUZANO',
    ],
  },
  {
    name: 'SIND. DOS EMPREGADOS NAS EMPRESAS DE REFS COLETIVAS SOROCABA E REGIÃO',
    address: 'RUA CAPITÃO JOSÉ DIAS, 87',
    town: 'CENTRO',
    city: 'SOROCABA',
    state: 'SP',
    phone: '(15) 3211-1665',
    email: '-',
    website: 'www.sindirefeicoests.org.br',
    basedata: 'JUNHO',
    coverage: [
      'ALAMBARI',
      'ALUMÍNIO',
      'ANGATUBA',
      'APIAÍ',
      'ARAÇARIGUAMA',
      'ARAÇOIABA DA SERRA',
      'BARRA DO CHAPÉU',
      'BOITUVA',
      'BURI',
      'CAMPINA DO MONTE ALEGRE',
      'CAPÃO BONITO',
      'CAPELA DO ALTO',
      'CASÁRIO LANGE',
      'CERQUILHO',
      'GUAPIARA',
      'GUAREI',
      'IBIÚNA',
      'IPERÓ',
      'IPIGUÁ',
      'IPORANGA',
      'ITAÓCA',
      'ITAPETININGA',
      'ITAPIRAPUÃ PAULISTA',
      'JACUTINGA',
      'JURUMIRIM',
      'MAIRINQUE',
      'PIEDADE',
      'PILAR DO SUL',
      'PORTO FELIZ',
      'QUADRA',
      'RIBEIRÃO BONITO',
      'RIBEIRÃO GRANDE',
      'RIBEIRA',
      'SÃO MIGUEL ARCANJO',
      'SALTO DE PIRAPORA',
      'SARAPUÍ',
      'SOROCABA',
      'TAQUARIVAÍ',
      'TATUÍ',
      'TIETÊ',
      'TURVO',
      'VARGEM GRANDE PAULISTA',
      'VOTORANTIM',
    ],
  },
  {
    name: 'SIND DOS EMPREGADOS NAS EMPRESAS REFEIÇÕES COLS E AFINS DE GUARULHOS',
    address: 'RUA MARIA DE CASTRO MESQUITA, 87, B',
    town: 'CENTRO',
    city: 'GUARULHOS',
    state: 'SP',
    phone: '(11) 2409-2669 – (11) 2442-9427',
    email: 'aretusasindrefeicoes@gmail.com',
    website: '-',
    basedata: 'JUNHO',
    coverage: ['GUARULHOS'],
  },
  {
    name: 'SINDICATO DOS TRABALHADORES EM REFEIÇÕES COLETIVAS DE SÃO PAULO',
    address: 'RUA DR. TOMAS ALVES, 73',
    town: 'VILA MARIANA',
    city: 'SAO PAULO',
    state: 'SP',
    phone: '(11) 5574-8398',
    email: 'comunicacao@sindirefeicoessp.org.br',
    website: 'www.sindirefeicoessp.org.br',
    basedata: 'JUNHO',
    coverage: ['SÃO PAULO'],
  },
  {
    name: 'SIND DOS TRABALHADORES EM EMPRESAS REFEIÇÕES COL DA REGIAO NORTE/OESTE',
    address: 'RUA CUSSY JÚNIOR, 11-63',
    town: 'CENTRO',
    city: 'BAURU',
    state: 'SP',
    phone: '(14) 3234-9763',
    email: 'adm@sinterc.org.br',
    website: 'www.sinterc.org.br',
    basedata: 'JUNHO',
    coverage: [
      'ÁGUAS DE SANTA BÁRBARA',
      'ÁLVARES FLORENCE',
      'ÁLVARES MACHADO',
      'ÁLVARO DE CARVALHO',
      'ÓLEO',
      'ADAMANTINA',
      'ADOLFO',
      'AGUDOS',
      'ALFREDO MARCONDES',
      'ALTAIR',
      'ALTINÓPOLIS',
      'ALTO ALEGRE',
      'ALVINLÂNDIA',
      'AMÉRICO DE CAMPOS',
      'ANDRADINA',
      'ANHEMBI',
      'ANHUMAS',
      'APARECIDA D’OESTE',
      'ARAÇATUBA',
      'ARAMINA',
      'ARANDU',
      'ARCO ÍRIS',
      'AREALVA',
      'AREIÓPOLIS',
      'ARIRANHA',
      'ASSIS',
      'AURIFLAMA',
      'AVAÍ',
      'AVANHANDAVA',
      'AVARÉ',
      'BÁLSAMO',
      'BADY BASSIT',
      'BALBINOS',
      'BARÃO DE ANTONINA',
      'BARBOSA',
      'BARIRI',
      'BARRA BONITA',
      'BARRETOS',
      'BARRINHA',
      'BASTOS',
      'BATATAIS',
      'BAURU',
      'BEBEDOURO',
      'BENTO DE ABREU',
      'BERNARDINO DE CAMPOS',
      'BILAC',
      'BIRIGUI',
      'BOCAINA',
      'BOFETE',
      'BOM SUCESSO DE ITARARÉ',
      'BORÁ',
      'BORACÉIA',
      'BOREBI',
      'BOTUCATU',
      'BRAÚNA',
      'BREJO ALEGRE',
      'BRODÓSQUI',
      'BURITAMA',
      'BURITIZAL',
      'CÁSSIA DOS COQUEIROS',
      'CÂNDIDO MOTA',
      'CÂNDIDO RODRIGUES',
      'CABRÁLIA PAULISTA',
      'CACONDE',
      'CAFELÂNDIA',
      'CAIABU',
      'CAIUÁ',
      'CAJOBI',
      'CAJURU',
      'CAMPOS NOVOS PAULISTA',
      'CANITAR',
      'CARDOSO',
      'CASA BRANCA',
      'CASTILHO',
      'CATANDUVA',
      'CATIGUÁ',
      'CEDRAL',
      'CERQUEIRA CESAR',
      'CHAVANTES',
      'COLÔMBO',
      'COLINA',
      'CONCHAS',
      'COROADOS',
      'CORONEL MACEDO',
      'COSMORAMA',
      'CRAVINHOS',
      'CRISTAIS PAULISTA',
      'CRUZÁLIA',
      'DIRCE REIS',
      'DIVINOLÂNDIA',
      'DOBRADA',
      'DOIS CÓRREGOS',
      'DOLCINÓPOLIS',
      'DRACENA',
      'DUARTINA',
      'DUMONT',
      'ECHAPORÃ',
      'ELISÁRIO',
      'EMBAÚBA',
      'EMILIANÓPOLIS',
      'ESPIRÍTO SANTO DO TURVO',
      'ESTRELA DO NORTE',
      'ESTRELA D’OESTE',
      'EUCLIDES DA CUNHA PAULISTA',
      'FARTURA',
      'FERNÃO',
      'FERNANDÓPOLIS',
      'FERNANDO PRESTES',
      'FLÓRIDA PAULISTA',
      'FLORÍNIA',
      'FLORA RICA',
      'FLOREAL',
      'FRANCA',
      'GÁLIA',
      'GABRIEL MONTEIRO',
      'GARÇA',
      'GASTÃO VIDIGAL',
      'GAVIÃO PEIXOTO',
      'GENERAL SALGADO',
      'GETULINA',
      'GLICÉRIO',
      'GUAIÇARA',
      'GUAIMBÊ',
      'GUAÍRA',
      'GUAPIAÇU',
      'GUARÁ',
      'GUARAÇAÍ',
      'GUARACI',
      'GUARANI D’OESTE',
      'GUARANTÃ',
      'GUARARAPES',
      'GUARIBA',
      'GUATAPARÁ',
      'GUZOLÂNDIA',
      'HERCULÂNDIA',
      'IACANGA',
      'IACRI',
      'IARAS',
      'IBIRÁ',
      'IBIRAREMA',
      'ICEM',
      'IEPÊ',
      'IGARAÇU DO TIETE',
      'IGARAPAVA',
      'ILHA SOLTEIRA',
      'INÚBIA PAULISTA',
      'INDIANA',
      'INDIAPORÃ',
      'IPAUÇU',
      'IPUÃ',
      'IRAPUÃ',
      'IRAPURU',
      'ITAÍ',
      'ITABERÁ',
      'ITAJU',
      'ITAPEVA',
      'ITAPORANGA',
      'ITAPUÍ',
      'ITAPEVA',
      'ITAPORANGA',
      'ITAPUÍ',
      'ITAPURA',
      'ITARAPUÃ',
      'ITARARÉ',
      'ITATINGA',
      'ITOBI',
      'ITUVERAVA',
      'JÚLIO MESQUITA',
      'JAÚ',
      'JABORANDI',
      'JABOTICABAL',
      'JACI',
      'JALES',
      'JARDINÓPOLIS',
      'JERIQUARA',
      'JOÃO RAMALHO',
      'JOSÉ BONIFÁCIO',
      'JUNQUEIRÓPOLIS',
      'LARANJAL PAULISTA',
      'LAVÍNIA',
      'LENÇÓIS PAULISTA',
      'LINS',
      'LOURDES',
      'LUCÉLIA',
      'LUCIANÓPOLIS',
      'LUIS ANTÔNIO',
      'LUIZIÂNIA',
      'LUPÉRCIO',
      'LUTÉCIA',
      'MACATUBA',
      'MACAUBAL',
      'MACEDÔNIA',
      'MAGDA',
      'MANDURÍ',
      'MARÍLIA',
      'MARABÁ PAULISTA',
      'MARACAÍ',
      'MARAPOAMA',
      'MARIÁPOLIS',
      'MATÃO',
      'MENDONÇA',
      'MERIDIANO',
      'MESÓPOLIS',
      'MIGUELÓPOLIS',
      'MIRANTE DO PARANAPANEMA',
      'MIRASSOL',
      'MIRASSOLÂNDIA',
      'MOCOCA',
      'MONÇÕES',
      'MONTE ALTO',
      'MONTE APRAZÍVEL',
      'MONTE AZUL PAULISTA',
      'MONTE CASTELO',
      'MORRO AGUDO',
      'MOTUCA',
      'MURUTINGA DO SUL',
      'NANTES',
      'NARANDIBA',
      'NEVES PAULISTA',
      'NHANDEARA',
      'NIPOÃ',
      'NOVA ALIANÇA',
      'NOVA CANAÃ PAULISTA',
      'NOVA CASTILHO',
      'NOVA GRANADA',
      'NOVA GUATAPORANGA',
      'NOVA INDEPENDÊNCIA',
      'NOVA LUZITÃNIA',
      'NOVAIS',
      'NUPORANGA',
      'OCAUÇU',
      'OLÍMPIA',
      'ONDA VERDE',
      'ORIENTE',
      'ORINDIÚVA',
      'ORLÂNDIA',
      'OSCAR BRESSANE',
      'OSVALDO CRUZ',
      'OURINHOS',
      'OURO VERDE',
      'OUROESTE',
      'PACAEMBU',
      'PALESTINA',
      'PALMARES D’OESTE',
      'PALMITAL',
      'PANORAMA',
      'PARAÍSO',
      'PARAGUAÇU PAULISTA',
      'PARANAPANEMA',
      'PARANAPUÃ',
      'PARAPUÃ',
      'PARDINHO',
      'PARISI',
      'PATROCÍNIO PAULISTA',
      'PAULICÉIA',
      'PAULISTANIA',
      'PAULO DE FARIA',
      'PEDERNEIRAS',
      'PEDRANÓPOLIS',
      'PEDREGULHO',
      'PEDRILHAS PAULISTA',
      'PENÁPOLIS',
      'PEREIRA BARRETO',
      'PEREIRAS',
      'PIACATU',
      'PINDORAMA',
      'PIQUEROBI',
      'PIRAJUÍ',
      'PIRANGI',
      'PIRAPOZINHO',
      'PIRATININGA',
      'PITANGUEIRAS',
      'PLANALTO',
      'PLATINA',
      'POLONI',
      'POMPÉIA',
      'PONGAÍ',
      'PONTAL',
      'PONTALINDA',
      'PONTES GESTAL',
      'POPULINA',
      'PORANGABA',
      'POTIRENDABA',
      'PRACINHA',
      'PRADOPOLIS',
      'PRESIDENTE VENCESLAU',
      'PRESIDENTE ALVES',
      'PRESIDENTE BERNARDES',
      'PRESIDENTE EPITÁCIO',
      'PRESIDENTE PRUDENTE',
      'PROMISSÃO',
      'QUATÁ',
      'QUEIROZ',
      'QUINTANA',
      'RANCHARIA',
      'REGENTE FEIJÓ',
      'REGINÓPOLIS',
      'RESTINGA',
      'RIBEIRÃO CORRENTE',
      'RIBEIRÃO DO SUL',
      'RIBEIRÃO DOS ÍNDIOS',
      'RIBEIRÃO PRETO',
      'RIFAINA',
      'RINÓPOLIS',
      'RIOLÂNDIA',
      'RIVERSUL',
      'ROSANA',
      'RUBIÁCEA',
      'RUBINÉIA',
      'SÃO FRANCISCO',
      'SÃO JOÃO DAS DUAS PONTES',
      'SÃO JOÃO DE IRACEMA',
      'SÃO JOÃO DO PAU D’ALHO',
      'SÃO JOAQUIM DA BARRA',
      'SÃO JOSÉ DA BELA VISTA',
      'SÃO JOSÉ DO RIO PARDO',
      'SÃO JOSÉ DO RIO PRETO',
      'SÃO MANUEL',
      'SÃO PEDRO DO TURVO',
      'SÃO SEBASTIÃO DA GRAMA',
      'SÃO SIMÃO',
      'sa',
      'SABINO',
      'SAGRES',
      'SALES',
      'SALES OLIVEIRA',
      'SALMORÃO',
      'SALTO GRANDE',
      'SANDOVALINA',
      'SANTÓPOLIS DO AGUAPEÍ',
      'SANTA ALBERTINA',
      'SANTA ADÉLIA',
      'SANTA CLARA D’OSTE',
      'SANTA CRUZ DA ESPERANÇA',
      'SANTA CRUZ DAS PALMEIRAS',
      'SANTA CRUZ DO RIO PARDO',
      'SANTA ENERSTINA',
      'SANTA FÉ DO SUL',
      'SANTA MERCEDES',
      'SANTA RITA D’OESTE',
      'SANTA ROTA DO VITERBO',
      'SANTA SALETE',
      'SANTANA DA PONTE PENSA',
      'SANTO ANASTÁCIO',
      'SANTO ANTÔNIO DO ARACANGUÁ',
      'SANTO ANTÕNIO DA ALEGRIA',
      'SANTO EXPEDITO',
      'SARUTAIÁ',
      'SEBASTIANÓPOLIS DO SUL',
      'SERRA AZUL',
      'SERRANA',
      'SERTÃOZINHO',
      'SUD MENNUCCI',
      'SUZANÓPOLIS',
      'TABAPUÃ',
      'TACIBA',
      'TAGUAÍ',
      'TAIÚVA',
      'TAIAÇU',
      'TAMBAÚ',
      'TANABI',
      'TAPIRATIBA',
      'TAQUARAL',
      'TAQUARITINGA',
      'TAQUARITUBA',
      'TARABAÍ',
      'TARUMÃ',
      'TEJUPÁ',
      'TEODORO SAMPAIO',
      'TERRA ROCHA',
      'TIMBURI',
      'TORRE DE PEDRA',
      'TRÊS FRONTEIRAS',
      'TRABIJU',
      'TUPÃ',
      'TUPI PAULISTA',
      'TURIÚBA',
      'TURMALINA',
      'UBARANA',
      'UBIRAJARA',
      'UCHOA',
      'UNIÃO PAULISTA',
      'URÂNIA',
      'URU',
      'URUPÊS',
      'VALENTIM GENTIL',
      'VALPARAÍSO',
      'VARGEM GRANDE DO SUL',
      'VERA CRUZ',
      'VIRADOURO',
      'VISTA ALEGRE DO ALTO',
      'VITÓRIA BRASIL',
      'VOTUPORANGA',
      'ZACARIAS',
    ],
  },
  {
    name: 'SIND. TRABALHADORES NAS EMPRESAS DE REFEIÇÕES COLS DE CAMPINAS E REGIÃO',
    address: 'RUA ÁLVARES MACHADO, 361',
    town: 'CENTRO',
    city: 'CAMPINAS',
    state: 'SP',
    phone: '(19) 3237-3455',
    email: 'contato@sintercamp.org.br',
    website: 'www.sintercamp.org.br',
    basedata: 'JUNHO',
    coverage: [
      'ÁGUAS DA PRATA',
      'ÁGUAS DE SÃO PEDRO',
      'AGUAÍ',
      'AMÉRICO BRASILIENSE',
      'AMERICANA',
      'ANALÂNDIA',
      'ARARAQUARA',
      'ARARAS',
      'ARTUR NOGUEIRA',
      'BOA ESPERANÇA DO SUL',
      'BORBOREMA',
      'BROTAS',
      'CAMPINAS',
      'CAPIVARI',
      'CHARQUEADA',
      'CONCHAL',
      'CORDEIRÓPOLIS',
      'CORUMBATAÍ',
      'COSMÓPOLIS',
      'DESCALVADO',
      'DOURADO',
      'ELIAS FAUSTO',
      'ENGENHEIRO COELHO',
      'ESTIVA GERBI',
      'HOLAMBRA',
      'HORTOLÂNDIA',
      'IBATÉ',
      'IBITINGA',
      'INDAIATUBA',
      'IPEÚNA',
      'IRACEMÁPOLIS',
      'ITÁPOLIS',
      'ITAJOBÍ',
      'ITAPIRA',
      'ITIRAPINA',
      'JAGUARIÚNA',
      'LEME',
      'LIMEIRA',
      'MOGI GUAÇU',
      'MOGI MIRIM',
      'MOMBUCA',
      'MONTE MOR',
      'NOVA EUROPA',
      'NOVA ODESSA',
      'NOVO HORIZONTE',
      'PAULÍNIA',
      'PEDREIRA',
      'PIRACICABA',
      'PIRASSUNUNDA',
      'PORTO FERREIRA',
      'RAFARD',
      'RIBEIRÃO BONITO',
      'RINCÃO',
      'RIO CLARO',
      'RIO DAS PEDRAS',
      'SÃO CARLOS',
      'SÃO JOÃO DA BOA VISTA',
      'SÃO PEDRO',
      'SALTINHO',
      'SANTA BARBARA D’OESTE',
      'SANTA CRUZ DA CONCEIÇÃO',
      'SANTA GERTRUDES',
      'SANTA LÚCIA',
      'SANTA MARIA DA SERRA',
      'SANTA RITA DO PASSA QUATRO',
      'SANTO ANTONIO DA POSSE',
      'SANTO ANTONIO DO JARDIM',
      'SUMARÉ',
      'TABATINGA',
      'TORRINHA',
      'VALINHOS',
    ],
  },
  {
    name: 'SIND DOS TRABALHADORES EM EMPRESAS DE REFEIÇÕES COLETIVAS DE JUNDIAÍ',
    address: 'RUA VIGÁRIO JOÃO JOSÉ RODRIGUES, 241',
    town: '-',
    city: 'JUNDIAÍ',
    state: 'SP',
    phone: '(11) 2136-6500',
    email: 'contato@sintercoj.org.br',
    website: 'www.sintercoj.org.br',
    basedata: 'JUNHO',
    coverage: [
      'ÁGUAS DE LINDÓIA',
      'AMPARO',
      'ATIBAIA',
      'BOM JESUS DOS PERDÕES',
      'BRAGANÇA PAULISTA',
      'CABREÚVA',
      'CAIEIRAS',
      'CAJAMAR',
      'CAMPO LIMPO PAULISTA',
      'FRANCISCO MORATO',
      'FRANCO DA ROCHA',
      'ITATIBA',
      'ITU',
      'ITUPEVA',
      'JARINU',
      'JOANÓPOLIS',
      'JUNDIAÍ',
      'LINDÓIA',
      'LOUVEIRA',
      'MONTE ALEGRE DO SUL',
      'MORUNGABA',
      'NAZARÉ PAULISTA',
      'PEDRA BELA',
      'PINHALZINHO',
      'PIRACAIA',
      'PIRAPORA DO BOM JESUS',
      'SALTO',
      'SERRA NEGRA',
      'SOCORRO',
      'TUIUTI',
      'VÁRZEA PAULISTA',
      'VARGEM',
      'VINHEDO',
    ],
  },
  {
    name: 'SIND. DOS TRABALHADORES NAS EMPRESAS REFS COLS DE CUBATAO E REGIAO',
    address: 'RUA BERNARDINO DE PINHO GOMES, 741',
    town: 'JD. SAO FRANCISCO',
    city: 'CUBATAO',
    state: 'SP',
    phone: '(13) 3375-3092',
    email: 'contato@sintercub.com.br',
    website: 'www.sintercub.com.br',
    basedata: 'JUNHO',
    coverage: [
      'BARRA DO TURVO',
      'BERTIOGA',
      'CAJATI',
      'CANANÉIA',
      'CARAGUATATUBA',
      'CUBATÃO',
      'ELDORADO',
      'GUARUJÁ',
      'IGUAPE',
      'ILHA BELA',
      'ILHA CUMPRIDA',
      'ITANHAEM',
      'ITARIRI',
      'JACUPIRANGA',
      'JUQUIÁ',
      'MIRACATU',
      'MONGAGUÁ',
      'PARIQUERA-AÇU',
      'PEDRO DE TOLEDO',
      'PERUIBE',
      'PRAIA GRANDE',
      'REGISTRO',
      'RIO GRANDE DA SERRA',
      'SÃO SEBASTIÃO',
      'SÃO VICENTE',
      'SANTOS',
      'UBATUBA',
    ],
  },
]
