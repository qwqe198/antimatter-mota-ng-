main.floors.boss2=
{
    "floorId": "boss2",
    "title": "声望层级",
    "name": "P",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 10,
    "defaultGround": "ground",
    "firstArrive": [
        "首次进行声望重置，将重置属性",
        "解锁了新的机制\n游戏复杂度上升了",
        "不过，反物质的获取增加了",
        "里程碑聚集在反物质较多的地方",
        {
            "type": "previewUI",
            "action": [
                {
                    "type": "drawImage",
                    "image": "2.png",
                    "x": 0,
                    "y": 0,
                    "w": 50,
                    "h": 40
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:point",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "status:hp",
            "value": "10000"
        },
        {
            "type": "setValue",
            "name": "status:atk",
            "value": "50"
        },
        {
            "type": "setValue",
            "name": "status:def",
            "value": "50"
        },
        {
            "type": "setValue",
            "name": "status:mdef",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "status:money",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:yellowKey",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:blueKey",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:redKey",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:I729",
            "value": "0"
        },
        {
            "type": "if",
            "condition": "(flag:hard===2)",
            "true": [
                {
                    "type": "choices",
                    "text": "需要小幅降低难度吗？",
                    "choices": [
                        {
                            "text": "要",
                            "action": [
                                "反物质+2，该区分数/100",
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "operator": "+=",
                                    "value": "2"
                                },
                                {
                                    "type": "setValue",
                                    "name": "flag:point",
                                    "operator": "*=",
                                    "value": "100"
                                },
                                "纳可姐姐太菜了！"
                            ]
                        },
                        {
                            "text": "不要w",
                            "action": []
                        }
                    ]
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flag:hard===1)",
            "true": [
                "简单难度福利：反物质+5",
                {
                    "type": "setValue",
                    "name": "status:money",
                    "operator": "+=",
                    "value": "5"
                },
                "纳可姐姐太菜了！"
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,10": [
            {
                "type": "clearMap"
            },
            {
                "type": "previewUI",
                "action": [
                    {
                        "type": "drawTextContent",
                        "text": "进入糖的心境",
                        "left": 12,
                        "top": 0,
                        "align": "left",
                        "fontSize": 20,
                        "color": [
                            210,
                            188,
                            68,
                            1
                        ]
                    },
                    {
                        "type": "strokeEllipse",
                        "x": 72,
                        "y": 107,
                        "a": 60,
                        "b": 50,
                        "angle": 0,
                        "style": [
                            237,
                            200,
                            6,
                            1
                        ],
                        "lineWidth": 3
                    },
                    {
                        "type": "fillEllipse",
                        "x": 72,
                        "y": 107,
                        "a": 60,
                        "b": 50,
                        "angle": 0,
                        "style": [
                            231,
                            226,
                            22,
                            0.42
                        ]
                    },
                    {
                        "type": "drawIcon",
                        "id": "I740",
                        "x": 58,
                        "y": 62,
                        "width": 30,
                        "height": 100
                    },
                    {
                        "type": "strokeRect",
                        "x": 2,
                        "y": 0,
                        "width": 147,
                        "height": 414,
                        "radius": 0,
                        "style": [
                            245,
                            216,
                            36,
                            1
                        ],
                        "lineWidth": 3
                    },
                    {
                        "type": "fillRect",
                        "x": 0,
                        "y": 0,
                        "width": 150,
                        "height": 600,
                        "style": [
                            0,
                            0,
                            0,
                            0.32
                        ]
                    },
                    {
                        "type": "drawTextContent",
                        "text": "需求：20里程碑",
                        "left": 16,
                        "top": 30,
                        "align": "left",
                        "fontSize": 15,
                        "color": [
                            230,
                            23,
                            105,
                            1
                        ],
                        "bold": true
                    }
                ]
            },
            {
                "type": "previewUI",
                "action": [
                    {
                        "type": "drawTextContent",
                        "text": "糖的充能条",
                        "left": 289,
                        "top": 0,
                        "align": "left",
                        "fontSize": 20,
                        "color": [
                            210,
                            188,
                            68,
                            1
                        ]
                    },
                    {
                        "type": "strokeRect",
                        "x": 267,
                        "y": 0,
                        "width": 147,
                        "height": 414,
                        "radius": 0,
                        "style": [
                            245,
                            216,
                            36,
                            1
                        ],
                        "lineWidth": 3
                    },
                    {
                        "type": "drawLine",
                        "x1": 287,
                        "y1": 126,
                        "x2": 307,
                        "y2": 126,
                        "style": [
                            0,
                            0,
                            0,
                            1
                        ],
                        "lineWidth": 3
                    },
                    {
                        "type": "drawLine",
                        "x1": 287,
                        "y1": 197,
                        "x2": 307,
                        "y2": 197,
                        "style": [
                            0,
                            0,
                            0,
                            1
                        ],
                        "lineWidth": 3
                    },
                    {
                        "type": "drawLine",
                        "x1": 287,
                        "y1": 268,
                        "x2": 307,
                        "y2": 268,
                        "style": [
                            0,
                            0,
                            0,
                            1
                        ],
                        "lineWidth": 3
                    },
                    {
                        "type": "drawLine",
                        "x1": 287,
                        "y1": 339,
                        "x2": 307,
                        "y2": 339,
                        "style": [
                            0,
                            0,
                            0,
                            1
                        ],
                        "lineWidth": 3
                    },
                    {
                        "type": "drawTextContent",
                        "text": "1e3：",
                        "left": 310,
                        "top": 334,
                        "fontSize": 16,
                        "color": [
                            0,
                            27,
                            255,
                            1
                        ],
                        "bold": true
                    },
                    {
                        "type": "drawTextContent",
                        "text": "获得兽神残卷",
                        "left": 310,
                        "top": 364,
                        "fontSize": 16,
                        "color": [
                            0,
                            27,
                            255,
                            1
                        ],
                        "bold": true
                    },
                    {
                        "type": "drawTextContent",
                        "text": "1e6：",
                        "left": 310,
                        "top": 263,
                        "fontSize": 16,
                        "color": [
                            0,
                            27,
                            255,
                            1
                        ],
                        "bold": true
                    },
                    {
                        "type": "drawTextContent",
                        "text": "30%能力效力",
                        "left": 310,
                        "top": 293,
                        "fontSize": 16,
                        "color": [
                            0,
                            27,
                            255,
                            1
                        ],
                        "bold": true
                    },
                    {
                        "type": "strokeRect",
                        "x": 287,
                        "y": 55,
                        "width": 20,
                        "height": 350,
                        "radius": 0,
                        "style": [
                            36,
                            165,
                            245,
                            1
                        ],
                        "lineWidth": 3
                    },
                    {
                        "type": "fillRect",
                        "x": 267,
                        "y": 0,
                        "width": 150,
                        "height": 600,
                        "style": [
                            0,
                            0,
                            0,
                            0.32
                        ]
                    },
                    {
                        "type": "drawTextContent",
                        "text": "${flag:cnhp}/1e15",
                        "left": 273,
                        "top": 30,
                        "fontSize": 15,
                        "color": [
                            230,
                            23,
                            105,
                            1
                        ],
                        "bold": true
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:cnhp>=1e15)",
                "true": [
                    {
                        "type": "fillRect",
                        "x": 287,
                        "y": 55,
                        "width": 20,
                        "height": 70,
                        "style": [
                            19,
                            166,
                            192,
                            0.32
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:cnhp>=1e12)",
                "true": [
                    {
                        "type": "fillRect",
                        "x": 287,
                        "y": 125,
                        "width": 20,
                        "height": 70,
                        "style": [
                            19,
                            166,
                            192,
                            0.32
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:cnhp>=1e9)",
                "true": [
                    {
                        "type": "fillRect",
                        "x": 287,
                        "y": 200,
                        "width": 20,
                        "height": 70,
                        "style": [
                            19,
                            166,
                            192,
                            0.32
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:cnhp>=1e6)",
                "true": [
                    {
                        "type": "fillRect",
                        "x": 287,
                        "y": 270,
                        "width": 20,
                        "height": 70,
                        "style": [
                            19,
                            166,
                            192,
                            0.32
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:cnhp>=1000)",
                "true": [
                    {
                        "type": "fillRect",
                        "x": 287,
                        "y": 340,
                        "width": 20,
                        "height": 65,
                        "style": [
                            19,
                            166,
                            192,
                            0.32
                        ]
                    }
                ]
            },
            {
                "type": "choices",
                "text": "\t[糖,N1880] 消耗生命充能获得加成",
                "width": 100,
                "choices": [
                    {
                        "text": "充能",
                        "action": [
                            {
                                "type": "input",
                                "text": "请输入消耗生命数量（非负整数）"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:input<status:hp)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:hp",
                                        "operator": "-=",
                                        "value": "flag:input"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:cnhp",
                                        "operator": "+=",
                                        "value": "flag:input"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "lose",
                                        "reason": "二：糖的充能为什么能超过当前生命啊qwq"
                                    }
                                ]
                            },
                            {
                                "type": "if",
                                "condition": "((flag:cnhp>=1000)&&(flag:cnhp1===0))",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:cnhp1",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:I603",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:I730",
                                        "operator": "+=",
                                        "value": "0.4"
                                    },
                                    "记得装备"
                                ]
                            },
                            {
                                "type": "if",
                                "condition": "((flag:cnhp>=1000000)&&(flag:cnhp2===0))",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:cnhp2",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:I731",
                                        "operator": "+=",
                                        "value": "(((Math.pow(130,0.5))/10)-1)"
                                    }
                                ]
                            },
                            {
                                "type": "clearMap",
                                "x": 0,
                                "y": 0
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "clearMap",
                                "x": 0,
                                "y": 0
                            },
                            {
                                "type": "previewUI",
                                "action": [
                                    {
                                        "type": "drawImage",
                                        "image": "2.png",
                                        "x": 0,
                                        "y": 0,
                                        "w": 50,
                                        "h": 40
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,8": [
            {
                "type": "setValue",
                "name": "item:lcb",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,6": [
            "\t[猫可]经过一段时间的熟悉后，\n对手中这把剑的掌握程度似乎又深了一层。",
            "\t[猫可]不过只是熟练度的提升而已。\n想要使用特殊技巧，恐怕还差得远呢。"
        ],
        "2,9": [
            {
                "type": "setValue",
                "name": "item:lcb",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,1": [
            {
                "type": "setValue",
                "name": "item:lcb",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "5,10": {
            "0": null,
            "1": null,
            "2": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,975,  0,615,  0,975,  0,587,973, 58,774,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,974,  1],
    [  1, 28,  0, 27,954,  0,  1, 81, 34, 21,  1,  0,  1],
    [  1,  0, 21,  0,  1, 34,  1,584,968, 21,  1, 21,  1],
    [  1,  1,961,  1,  1,  0,  1,  1,  1, 81,  1,  0,  1],
    [  1,  0,576,  0,  1,614, 81,954,955,954,  1, 34,  1],
    [  1, 32,  0, 28,  1,955,  1,  1,  1,  1,  1,  0,  1],
    [  1,  1, 82,  1,  1, 30,943, 33,  0,955,  0,1881,  1],
    [  1,  0,960,  0,  1,  1, 83,  1,  1,  1, 81,  1,  1],
    [  1, 23,  0,577,  1,1880, 22,  0,  1,954, 28,961,  1],
    [  1,  0,585,  0,  1, 21,  0, 23,  1, 30, 82, 58,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "bgm": "2.mp3"
}