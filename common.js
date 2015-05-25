var chapters = [
    {"name": "Introduction", "url": "/index.html"},
    {"name": "Channel Coding", "url": "/channelCoding.html"},
    {"name": "Digital Modulation", "url": "/digitalMoDem.html"},
    {"name": "RF Front End", "url": "/RF.html"},
    {"name": "Antenna", "url": "/antenna.html"}
];

var navigation = function () {
    return [
        m("h1","Bits, symbols and waves"),
        m("h3","A compact primer on wireless communications"),
        m("table#nav",[
            m("tr",[ chapters.map(function(topic,index) { return m("td", m("a",{href: topic.url},topic.name)); }) ]),
        ])
    ]
        
}; 

var layout = function(navigation, content) {
    return  [
        m("header", navigation),
        m("article#content", content)
    ];
};

var mixinLayout = function(layout, navigation, content) {
    return function() {
        return layout(navigation(), content());
    };
};

