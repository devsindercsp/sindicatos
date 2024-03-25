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
      'AREIAS',
      'BANANAL',
      'CAÇAPAVA',
      'CACHOEIRA PAULISTA',
      'CAMPOS DO JORDÃO',
      'CRUZEIRO',
      'CUNHA',
      'GUARATINGUETÁ',
      'IGARATÁ',
      'JACAREÍ',
      'JAMBEIRO',
      'LAGOÍNHA',
      'LAVRINHAS',
      'LORENA',
      'MONTEIRO LOBATO',
      'NATIVIDADE DA SERRA',
      'PARAIBUNA',
      'PINDAMONHANGABA',
      'PIQUETE',
      'QUELUZ',
      'ROSEIRA',
      'SANTA BRANCA',
      'SANTO ANTONIO DO PINHAL',
      'SÃO BENTO DO SAPUCAÍ',
      'SÃO JOSÉ DO BARREIRO',
      'SÃO JOSÉ DOS CAMPOS',
      'SÃO LUIS DO PARAITINGA',      
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
    basedata: 'Junho',
    coverage: ['TODO O ESTADO DE SÃO PAULO'],
  },
  {
    name: 'SINDICATO DOS TÉCNICOS EM NUTRIÇÃO DO ESTADO DE SÃO PAULO',
    address: 'RUA BARRA FUNDA, 933 - SALA 03',
    town: 'BARRA FUNDA',
    city: 'SÃO PAULO',
    state: 'SP',
    phone: '(11) 3666-8803',
    email: 'atendimento@sintenutri.org.br',
    website: 'www.sintenutri.org.br',
    basedata: 'Junho',
    coverage: ['TODO O ESTADO DE SÃO PAULO'],
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
    basedata: 'Junho',
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
      'SANTA ISABEL',
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
    basedata: 'Junho',
    coverage: [
      'ALAMBARI',
      'ALUMÍNIO',
      'ANGATUBA',
      'APIAÍ',
      'ARAÇARIGUAMA',
      'ARAÇOIABA DA SERRA',
      'BARRA DO CHAPÉU',
      'BARRA DO TURVO',
      'BOITUVA',
      'BURI',
      'CAMPINA DO MONTE ALEGRE',
      'CAPÃO BONITO',
      'CAPELA DO ALTO',
      'CERQUILHO',
      'CASÁRIO LANGE',      
      'GUAPIARA',
      'GUAREÍ',
      'IBIÚNA',
      'IPERÓ',
      'IPIGUÁ',
      'IPORANGA',
      'ITAOCA',
      'ITAPETININGA',
      'ITAPIRAPUÃ PAULISTA',
      'JUMIRIM',
      'MAIRINQUE',
      'PIEDADE',
      'PILAR DO SUL',
      'PORTO FELIZ',
      'QUADRA',
      'RIBEIRA',
      'RIBEIRÃO BRANCO',
      'RIBEIRÃO GRANDE',
      'SALTO DE PIRAPORA',
      'SÃO MIGUEL ARCANJO',
      'SÃO ROQUE',
      'SARAPUÍ',
      'SOROCABA',
      'TAPIRAÍ',
      'TAQUARIVAÍ',
      'TATUÍ',
      'TIETÊ',
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
    basedata: 'Junho',
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
    basedata: 'Junho',
    coverage: ['SÃO PAULO - CAPITAL'],
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
    basedata: 'Junho',
    coverage: [
      'ADAMANTINA',
      'ADOLFO',
      'ÁGUAS DE SANTA BÁRBARA',
      'AGUDOS',
      'ALFREDO MARCONDES',
      'ALTAIR',
      'ALTINÓPOLIS',
      'ALTO ALEGRE',
      'ÁLVARES FLORENCE',
      'ÁLVARES MACHADO',
      'ÁLVARO DE CARVALHO',
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
      'AREIAS',
      'AREIÓPOLIS',
      'ARIRANHA',
      'ASPÁSIA',
      'ASSIS',
      'AURIFLAMA',
      'AVAÍ',
      'AVANHANDAVA',
      'AVARÉ',
      'BADY BASSIT',
      'BALBINOS',
      'BÁLSAMO',
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
      'BRODOWSQUI',
      'BURITAMA',
      'BURITIZAL',
      'CABRÁLIA PAULISTA',
      'CACONDE',
      'CAFELÂNDIA',
      'CAIABU',
      'CAIUÁ',
      'CAJATI',
      'CAJOBI',
      'CAJURU',
      'CAMPOS NOVOS PAULISTA'      
      'CÂNDIDO MOTA',
      'CÂNDIDO RODRIGUES',
      'CANITAR',
      'CARDOSO',
      'CASA BRANCA',
      'CÁSSIA DOS COQUEIROS',
      'CASTILHO',
      'CATANDUVA',
      'CATIGUÁ',
      'CEDRAL',
      'CERQUEIRA CESAR',
      'CHAVANTES',
      'CLEMENTINA',
      'COLINA',
      'COLÔMBIA',
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
      'FERNANDO PRESTES',
      'FERNANDÓPOLIS',
      'FERNÃO',
      'FLORA RICA',
      'FLOREAL',
      'FLÓRIDA PAULISTA',
      'FLORÍNEA',      
      'FRANCA',
      'GABRIEL MONTEIRO',
      'GÁLIA',      
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
      'INÚBIA PAULISTA',
      'IPAUSSU',
      'IPUÃ',
      'IRAPUÃ',
      'IRAPURU',
      'ITABERÁ',
      'ITAÍ',      
      'ITAJU',
      'ITAPEVA',
      'ITAPORANGA',
      'ITAPUÍ',
      'ITAPURA',
      'ITARARÉ',      
      'ITATINGA',
      'ITIRAPUÃ',
      'ITOBI',
      'ITUVERAVA',
      'JABORANDI',
      'JABOTICABAL',
      'JACI',
      'JALES',
      'JARDINÓPOLIS',
      'JAÚ',
      'JERIQUARA',
      'JOÃO RAMALHO',
      'JOSÉ BONIFÁCIO',
      'JULIO MESQUITA',
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
      'MANDURI',      
      'MARABÁ PAULISTA',
      'MARACAÍ',
      'MARAPOAMA',
      'MARIÁPOLIS',
      'MARÍLIA',
      'MARINÓPOLIS',
      'MARTINÓPOLIS',
      'MATÃO',
      'MENDONÇA',
      'MERIDIANO',
      'MESÓPOLIS',
      'MIGUELÓPOLIS',
      'MINEIROS DO TIETÊ',
      'MIRA ESTRELA',
      'MIRANDÓPOLIS',
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
      'NOVA CAMPINA',
      'NOVA CANAÃ PAULISTA',
      'NOVA CASTILHO',
      'NOVA GRANADA',
      'NOVA GUATAPORANGA',
      'NOVA INDEPENDÊNCIA',
      'NOVA LUZITÃNIA',
      'NOVAIS',
      'NUPORANGA',
      'OCAUÇU',
      'ÓLEO',
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
      'PALMARES PAULISTA',
      'PALMARES D’OESTE',
      'PALMITAL',
      'PANORAMA',
      'PARAGUAÇU PAULISTA',
      'PARAÍSO',      
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
      'PIRAJU',
      'PIRAJUÍ',
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
      'PRADÓPOLIS',
      'PRESIDENTE VENCESLAU',
      'PRESIDENTE ALVES',
      'PRESIDENTE BERNARDES',
      'PRESIDENTE EPITÁCIO',
      'PRESIDENTE PRUDENTE',
      'PRESIDENTE VENCESLAU',
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
      'SABINO',
      'SAGRES',
      'SALES',
      'SALES OLIVEIRA',
      'SALMOURÃO',
      'SALTO GRANDE',
      'SANDOVALINA',
      'SANTA ADÉLIA',
      'SANTA ALBERTINA',
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
      'SANTO ANTÕNIO DA ALEGRIA',
      'SANTO ANTÔNIO DO ARACANGUÁ',      
      'SANTO EXPEDITO',
      'SANTÓPOLIS DO AGUAPEÍ',
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
      'SARUTAIÁ',
      'SEBASTIANÓPOLIS DO SUL',
      'SERRA AZUL',
      'SERRANA',
      'SERTÃOZINHO',
      'SEVERÍNIA',
      'SUD MENNUCCI',
      'SUZANÓPOLIS',
      'TABAPUÃ',
      'TACIBA',
      'TAGUAÍ',
      'TAIAÇU',
      'TAIÚVA',
      'TAMBAÚ',
      'TANABI',
      'TAPIRATIBA',
      'TAQUARAL',
      'TAQUARITINGA',
      'TAQUARITUBA',
      'TARABAI',
      'TARUMÃ',
      'TEJUPÁ',
      'TEODORO SAMPAIO',
      'TERRA ROXA',
      'TIMBURI',
      'TORRE DE PEDRA',
      'TRÊS FRONTEIRAS',
      'TRABIJU',
      'TRÊS FONTEIRAS',
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
    basedata: 'Junho',
    coverage: [
      'AGUAÍ',
      'ÁGUAS DA PRATA',
      'ÁGUAS DE SÃO PEDRO',
      'AMERICANA',
      'AMÉRICO BRASILIENSE',
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
      'ITAJOBÍ',
      'ITAPIRA',
      'ITÁPOLIS',
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
      'PIRASSUNUNGA',
      'PORTO FERREIRA',
      'RAFARD',
      'RIBEIRÃO BONITO',
      'RINCÃO',
      'RIO CLARO',
      'RIO DAS PEDRAS',      
      'SALTINHO',
      'SANTA BARBARA D’OESTE',
      'SANTA CRUZ DA CONCEIÇÃO',
      'SANTA GERTRUDES',
      'SANTA LÚCIA',
      'SANTA MARIA DA SERRA',
      'SANTA RITA DO PASSA QUATRO',
      'SANTO ANTONIO DE POSSE',
      'SANTO ANTONIO DO JARDIM',
      'SÃO CARLOS',
      'SÃO JOÃO DA BOA VISTA',
      'SÃO PEDRO',
      'SUMARÉ',
      'TABATINGA',
      'TORRINHA',
      'VALINHOS',
    ],
  },
  {
    name: 'SIND DOS TRABALHADORES EM EMPRESAS DE REFEIÇÕES COLETIVAS DE JUNDIAÍ',
    address: 'RUA DA SAÚDE, 91',
    town: '-',
    city: 'JUNDIAÍ',
    state: 'SP',
    phone: '(11) 2136-6500',
    email: 'contato@sintercoj.org.br',
    website: 'www.sintercoj.org.br',
    basedata: 'Junho',
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
      'VARGEM',
      'VÁRZEA PAULISTA',
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
    basedata: 'Junho',
    coverage: [
      'BERTIOGA',
      'CAJATI',
      'CANANÉIA',
      'CARAGUATATUBA',
      'CUBATÃO',
      'ELDORADO',
      'GUARUJÁ',
      'IGUAPE',
      'ILHA COMPRIDA',
      'ILHABELA',      
      'ITANHAEM',
      'ITARIRI',
      'JACUPIRANGA',
      'JUQUIÁ',
      'MIRACATU',
      'MONGAGUÁ',
      'PARIQUERA-AÇU',
      'PEDRO DE TOLEDO',
      'PERUÍBE',
      'PRAIA GRANDE',
      'REGISTRO',
      'RIO GRANDE DA SERRA',
      'SANTOS',
      'SÃO SEBASTIÃO',
      'SÃO VICENTE',      
      'UBATUBA',
    ],
  },
]
