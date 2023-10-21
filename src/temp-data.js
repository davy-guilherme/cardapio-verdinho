import linguicaAcebolada from './assets/products/ref-linguica-acebolada.png'
import berinjelaParmegiana from './assets/products/ref-berinjela-parmegiana.png'
import bifeVegetalComFritas from './assets/products/ref-bife-vegetal-com-fritas.png'
import nuggetsVerdin from './assets/products/ref-nuggets-verdin.png'
import bolinhoJaponesECabotia from './assets/products/ref-bolinho-japones-e-cabotia.png'
import veggieBurgerComLegumes from './assets/products/ref-veg-burger-e-fritas.png'
import couveFlorCrocanteEFritas from './assets/products/ref-couve-flor-crocante-e-fritas.png'
import massaMolho from './assets/products/ref-massa-molho.png'
import totaCookiesAndCream from './assets/products/doc-torta-cookies-and-cream.png'
import porFalafel from './assets/products/por-falafel.png'
import porBolinhoJapones from './assets/products/por-bolinho-japones.png'
import porNuggetsVerdin from './assets/products/por-nuggets-verdin.png'
import porBerinjelaMilanesa from './assets/products/por-berinjela-milanesa.png'
import porMandiocaFrita from './assets/products/por-mandioca-frita.png'



// export const cartItems = [
//     {
//         id: '123',
//         name: 'Basil',
//         price: '$26.00',
//         imageName: basilBottle,
//     },
//     {
//         id: '234',
//         name: 'Lemon',
//         price: '$26.00',
//         imageName: lemonBottle,
//     },
//     {
//         id: '345',
//         name: 'Garlic',
//         price: '$26.00',
//         imageName: garlicBottle,
//     }
// ];

export const products = [
    {
        id: 'REF010001',
        name: 'Linguiça Acebolada *com novidade*',
        price: '29.99',
        serves: 'Serve 1 pessoa',
        description: 'Novidade: Agora você pode escolher se deseja as nossas tradicionais fatias de Calabresa de soja Ou Linguiça de soja Apimentada, ambas levemente grelhadas, refogadas com rodelas de cebola. Servidas com arroz, feijão carioca e mandioca frita. Acompanha salada do Dia.',
        image: linguicaAcebolada,
        type: 'REF'
    },
    {
        id: 'REF011001',
        name: 'Berinjela à parmegiana',
        price: '29.99',
        serves: 'Serve 1 pessoa',
        description: 'Fatias de berinjela empanadas em farinha Panko, fritas e crocantes. Dispostas em camadas e cobertas por nosso molho de tomate rústico, finalizadas com mussarela vegetal Vida Veg. Acompanha salada do Dia, para trazer um verdinho ao prato, batata frita e arroz.',
        image: berinjelaParmegiana,
        type: 'REF'
    },
    {
        id: 'REF012001',
        name: 'Bife vegetal com fritas',
        price: '29.99',
        serves: 'Serve 1 pessoa',
        description: 'Um dos nossos pratos favoritos de vocês! Pra quem adora (ou adorava) aquele prato de arroz, feijão, bife acebolado e batata frita, já pode matar a saudade! Nosso bife é suculento e saboroso, acompanhado de arroz e feijão fresquinho e caseiro, batata frita e salada do Dia.',
        image: bifeVegetalComFritas,
        type: 'REF'
    },
    {
        id: 'REF013001',
        name: 'Nuggets Verdin',
        price: '29.99',
        serves: 'Serve 1 pessoa',
        description: 'Nossos deliciosos nuggets vegetais, artesanais e nutritivos, empanados na farinha panco, crocantes por fora e macios por dentro, acompanhados por arroz, feijão (opcional) e batata frita. E salada do Dia! Uma refeição completa!',
        image: nuggetsVerdin,
        type: 'REF'
    },
    {
        id: 'REF014001',
        name: 'Bolinho Japonês e Cabotiá',
        price: '29.99',
        serves: 'Serve 1 pessoa',
        description: 'Bolinho japonês à base de proteína de soja texturizada (Pts) frito, crocante por fora, macio por dentro, perfeitamente combinado com a suavidade e doçura da abóbora japonesa cabotiá. Acompanha arroz, feijão e salada do Dia.',
        image: bolinhoJaponesECabotia,
        type: 'REF'
    },
    {
        id: 'REF015001',
        name: 'Veggie Burger, Legumes e Fritas (ou Mandioca)',
        price: '29.99',
        serves: 'Serve 1 pessoa',
        description: 'Saudável e delicioso, hambúrguer feito de grão de bico, brócolis, cenoura e ervilhas frescas, temperado e muito saboroso, grelhado até atingir uma crosta dourada e um interior macio e suculento. Acompanha arroz, feijão (opcional), batata frita e um delicioso refogado de abobrinha e cenoura.',
        image: veggieBurgerComLegumes,
        type: 'REF'
    },
    {
        id: 'REF016001',
        name: 'Couve Flor Crocante, Legumes e Fritas (ou Mandioca)',
        price: '29.99',
        serves: 'Serve 1 pessoa',
        description: 'Couve-flor crocante, empanada na farinha Panko, conhecida também como "frango frito vegano". Acompanha arroz fresquinho, feijão (opcional), um refogado de abobrinha e cenoura e você escolhe se deseja batata ou mandioca frita. Acompanha salada do Dia.',
        image: couveFlorCrocanteEFritas,
        type: 'REF'
    },
    {
        id: 'REF017001',
        name: 'Escolha a sua Massa e Molho',
        price: '29.99',
        serves: 'Serve 1 pessoa',
        description: 'Feitas com trigo importado da itália, nossas massas são cozidas na hora e você pode escolher o seu tipo de massa favorito e o molho. São 4 tipos de massa, 4 tipos de molho e 5 opções de adicionais para acrescentar em sua refeição.',
        image: massaMolho,
        type: 'REF'
    },
    {
        id: 'DOC001',
        name: 'Torta Cookies \'n Cream',
        price: '14.00',
        serves: '',
        description: 'Torta Sorvete Irresistível! Essa é a nossa torta Cookies \'n Cream. Base de biscoito tipo Oreo, recheio cremoso de baunilha com pedaços de biscoito, coberta por biscoitos crocantes. Uma sobremesa leve e deliciosamente vegana! Produção própria. Armazenamento em Freezer.',
        image: totaCookiesAndCream,
        type: 'DOC'
    },
    {
        id: 'POR001',
        name: 'Falafel (6 unid)',
        price: '15.90',
        serves: '',
        description: 'O queridinho dos veganos: bolinho dourado e crocante, à base de grão-de-bico cuidadosamente temperado com especiarias autênticas do Oriente Médio. 6 unidades',
        image: porFalafel,
        type: 'POR'
    },
    {
        id: 'POR002',
        name: 'Bolinho Japonês (6 unid)',
        price: '18.00',
        serves: '',
        description: 'Reeleitura do clássico bolinho japonês, feito à base de proteína de soja texturizada (Pts), empanado e frito. Impossível comer só um! 6 unidades',
        image: porBolinhoJapones,
        type: 'POR'
    },
    {
        id: 'POR003',
        name: 'Nuggets Verdin (6 unid)',
        price: '21.90',
        serves: '',
        description: 'Nossos queridinhos nuggets vegetais, preparados artesanalmente, empanados na farinha panco, crocantes por fora e macios por dentro. 6 unidades',
        image: porNuggetsVerdin,
        type: 'POR'
    },
    {
        id: 'POR004',
        name: 'Berinjela à milanesa (Porção)',
        price: '14.00',
        serves: '',
        description: 'Rodelas de berinjela empanadas em farinha Panko, fritas e com casquinha crocante temperadinha. 6 unidades',
        image: porBerinjelaMilanesa,
        type: 'POR'
    },
    {
        id: 'POR005',
        name: 'Mandioca Frita (Porção)',
        price: '14.00',
        serves: '',
        description: '<b>Aproximadamente</b> 6 pedaços de mandioca fritinha, crocante, totalizando entre 240 e 300g',
        image: porMandiocaFrita,
        type: 'POR'
    },
    {
        id: 'BEB001',
        name: 'Chá Branco Feel Good Lichia Lata 330ml',
        price: '7.40',
        serves: '',
        description: 'Lata 330ml',
        type: 'BEB'
    }
    ,
    {
        id: 'BEB002',
        name: 'Chá Pronto Feel Good Chá Branco com Pitaya Lata 330ml',
        price: '7.40',
        serves: '',
        description: 'Lata 330ml',
        type: 'BEB'
    },
    {
        id: 'BEB003',
        name: 'Chá Pronto Verde Gengibre e Limão Zero Campo Largo 900ml',
        price: '10.50',
        serves: '',
        description: 'Garrafa 900ml',
        type: 'BEB'
    },
    {
        id: 'BEB004',
        name: 'Água Mineral Lindoya 510ml',
        price: '2.75',
        serves: '',
        description: 'Garrafa 510ml',
        type: 'BEB'
    },
    {
        id: 'BEB005',
        name: 'Água Mineral com Gás Verão Lindoya 510ml',
        price: '3.00',
        serves: '',
        description: 'Garrafa 510ml',
        type: 'BEB'
    },
    {
        id: 'BEB006',
        name: 'Suco Sabor Laranja Natural One 300ml',
        price: '4.50',
        serves: '',
        description: 'Garrafa 300ml',
        type: 'BEB'
    },
    {
        id: 'BEB007',
        name: 'Suco de Uva e Maçã Natural One 300ml',
        price: '4.50',
        serves: '',
        description: 'Embalagem 300ml',
        type: 'BEB'
    },
    {
        id: 'BEB008',
        name: 'Refrigerante de Cola Orgânico Wewi Zero Garrafa 355ml',
        price: '7.30',
        serves: '',
        description: 'Garrafa 355ml',
        type: 'BEB'
    },
    {
        id: 'BEB009',
        name: 'Refrigerante Guaraná Wewi Zero Lata 350ml',
        price: '7.80',
        serves: '',
        description: 'Lata 350ml',
        type: 'BEB'
    },
    {
        id: 'BEB010',
        name: 'Refrigerante Orgânico Guaraná Wewi 350ml',
        price: '6.80',
        serves: '',
        description: 'Lata 350ml',
        type: 'BEB'
    },
    {
        id: 'BEB011',
        name: 'Refrigerante Orgânico Cola Wewi 350ml',
        price: '6.80',
        serves: '',
        description: 'Lata 350ml',
        type: 'BEB'
    }
    
    
    
    
    
    
    
];