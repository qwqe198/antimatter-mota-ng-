main.floors.W41=
{
    "floorId": "W41",
    "title": "时",
    "name": "时",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "m2.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1000,
    "defaultGround": 901,
    "bgm": "3.mp3",
    "firstArrive": [
        "4维度提升就没了",
        {
            "type": "setBlock",
            "number": "N1880",
            "loc": [
                [
                    6,
                    9
                ]
            ]
        },
        {
            "type": "setValue",
            "name": "flag:un1",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:gfpow",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "flag:spxl",
            "value": "100"
        },
        {
            "type": "setValue",
            "name": "flag:sp1",
            "value": "0.01"
        },
        {
            "type": "setValue",
            "name": "flag:spll",
            "value": "10"
        },
        {
            "type": "setValue",
            "name": "flag:spgf",
            "value": "10000"
        },
        {
            "type": "setValue",
            "name": "flag:spyg",
            "value": "10"
        },
        {
            "type": "setValue",
            "name": "flag:sp",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:spmax",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:gfmul",
            "value": "1.2"
        },
        {
            "type": "setValue",
            "name": "flag:hpmul",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "item:I731",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:time",
            "value": "1"
        },
        {
            "type": "disableShop",
            "id": "b1"
        },
        {
            "type": "openShop",
            "id": "space"
        }
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(item:I729>=40)",
            "true": [
                {
                    "type": "choices",
                    "text": "你已经达到当前世界的上界。\n请选择一项：",
                    "choices": [
                        {
                            "text": "离开世界",
                            "action": [
                                {
                                    "type": "insert",
                                    "loc": [
                                        0,
                                        0
                                    ],
                                    "floorId": "sample2"
                                }
                            ]
                        },
                        {
                            "text": "记录成绩",
                            "action": [
                                "计分方式为：\n当前维度提升*1e16+当前永恒之匙数量*1e11+当前生命/1e9。\n若生命>9223372036854775807，则超出的部分不计入成绩。",
                                {
                                    "type": "if",
                                    "condition": "(status:hp>=9223372036854775807)",
                                    "true": [
                                        {
                                            "type": "setValue",
                                            "name": "status:hp",
                                            "value": "9223372036854775807"
                                        }
                                    ],
                                    "false": []
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:hp",
                                    "operator": "/=",
                                    "value": "1e9"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:hp",
                                    "operator": "+=",
                                    "value": "item:I729*1e16+item:greenKey*1e11"
                                },
                                {
                                    "type": "switch",
                                    "condition": "flag:world",
                                    "caseList": [
                                        {
                                            "case": "1",
                                            "action": [
                                                {
                                                    "type": "win",
                                                    "reason": "光暗",
                                                    "noexit": 1
                                                }
                                            ]
                                        },
                                        {
                                            "case": "2",
                                            "action": [
                                                {
                                                    "type": "win",
                                                    "reason": "水火",
                                                    "noexit": 1
                                                }
                                            ]
                                        },
                                        {
                                            "case": "3",
                                            "action": [
                                                {
                                                    "type": "win",
                                                    "reason": "日月",
                                                    "noexit": 1
                                                }
                                            ]
                                        },
                                        {
                                            "case": "4",
                                            "action": [
                                                {
                                                    "type": "win",
                                                    "reason": "时空",
                                                    "noexit": 1
                                                }
                                            ]
                                        },
                                        {
                                            "case": "5",
                                            "action": [
                                                {
                                                    "type": "win",
                                                    "reason": "生死",
                                                    "noexit": 1
                                                }
                                            ]
                                        },
                                        {
                                            "case": "6",
                                            "action": [
                                                {
                                                    "type": "win",
                                                    "reason": "正邪",
                                                    "noexit": 1
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "insert",
                                    "loc": [
                                        6,
                                        3
                                    ],
                                    "floorId": "sample0"
                                }
                            ]
                        }
                    ]
                }
            ],
            "false": []
        }
    ],
    "parallelDo": "",
    "events": {
        "6,9": [
            {
                "type": "insert",
                "loc": [
                    5,
                    10
                ],
                "floorId": "boss2"
            }
        ]
    },
    "changeFloor": {
        "6,6": {
            "floorId": "W42",
            "loc": [
                6,
                6
            ],
            "direction": "down"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,4": [
            {
                "type": "setValue",
                "name": "flag:w11",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:w11==2)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:spxl",
                        "operator": "+=",
                        "value": "10"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:spll",
                        "value": "(10*(flag:spxl/100))"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:spgf",
                        "value": "(Math.floor((10000+(Math.pow(((flag:spxl-100)*10),flag:gfpow)))))"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:spyg",
                        "value": "(10*(flag:spxl/100))"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:sp",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:spmax",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:gfmul",
                        "value": "((Math.floor(((1.1+(1*(flag:spxl/1000)))*100)))/100)"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:hpmul",
                        "value": "(1+(1*(flag:spxl/200)))"
                    },
                    {
                        "type": "setValue",
                        "name": "item:I729",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:w11",
                        "value": "0"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:spxl",
                        "operator": "+=",
                        "value": "10"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.resetMap([\"W41\",\"W42\"])\n}"
                    },
                    {
                        "type": "if",
                        "condition": "(item:I729==40)",
                        "true": [
                            {
                                "type": "changeFloor",
                                "floorId": "W41",
                                "loc": [
                                    6,
                                    8
                                ],
                                "direction": "up",
                                "time": 500
                            }
                        ],
                        "false": [
                            {
                                "type": "changeFloor",
                                "floorId": "W41",
                                "loc": [
                                    6,
                                    8
                                ],
                                "direction": "up",
                                "time": 500
                            },
                            {
                                "type": "animate",
                                "name": "magic",
                                "loc": "hero"
                            },
                            {
                                "type": "setValue",
                                "name": "status:money",
                                "operator": "*=",
                                "value": "2+flag:fwz+flag:fwz2"
                            }
                        ]
                    }
                ],
                "false": []
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [147,147,147,147,147,147,147,147,147,147,147,147,147],
    [147,147,147,147,147,147,147,147,147,147,147,147,147],
    [147,147,147, 33,147,147,147,147,147, 27,147,147,147],
    [147,147, 33,  0,227,147,147,147,226,  0, 29,147,147],
    [147,147,147,227,  0,  0,228,  0,  0,225,147,147,147],
    [147,147,147,  0,  0, 27,  0,  0, 33,  0,147,147,147],
    [147, 28,225,  0,  0,  0,904,  0,  0,  0,226, 27,147],
    [147,147,147,  0, 33,  0,  0, 28,  0,  0,147,147,147],
    [147,147,147,227,  0,  0,  0,  0,  0,225,147,147,147],
    [147,147, 28,  0,226,147,147,147,225,  0, 29,147,147],
    [147,147,147, 28,147,147,147,147,147, 34,147,147,147],
    [147,147,147,147,147,147,147,147,147,147,147,147,147],
    [147,147,147,147,147,147,147,147,147,147,147,147,147]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}