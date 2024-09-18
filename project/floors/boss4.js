main.floors.boss4=
{
    "floorId": "boss4",
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
    "ratio": 1000,
    "defaultGround": "ground",
    "bgm": "2.mp3",
    "firstArrive": [
        "复杂度提升至3",
        {
            "type": "setValue",
            "name": "item:I1896",
            "value": "1"
        },
        {
            "type": "setEnemyOnPoint",
            "loc": [
                [
                    6,
                    3
                ]
            ],
            "name": "hp",
            "value": "3000000"
        },
        {
            "type": "setEnemyOnPoint",
            "loc": [
                [
                    6,
                    3
                ]
            ],
            "name": "atk",
            "value": "22000"
        },
        {
            "type": "setEnemyOnPoint",
            "loc": [
                [
                    6,
                    3
                ]
            ],
            "name": "def",
            "value": "9000"
        },
        {
            "type": "setEnemy",
            "id": "loader",
            "name": "special",
            "value": "[37,43,78]"
        },
        {
            "type": "setEnemy",
            "id": "loader",
            "name": "money",
            "value": "0"
        },
        "记得看攻略"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,6": [
            {
                "type": "insert",
                "loc": [
                    5,
                    10
                ],
                "floorId": "boss2"
            }
        ],
        "6,3": []
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "6,3": [
            {
                "type": "setBlock",
                "number": "loader",
                "loc": [
                    [
                        6,
                        3
                    ]
                ],
                "floorId": "boss4"
            },
            {
                "type": "setValue",
                "name": "flag:plcb",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "previewUI",
                "_collapsed": true,
                "action": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                2,
                                3
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                2,
                                4
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                2,
                                5
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                2,
                                6
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                2,
                                7
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                2,
                                8
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                2,
                                9
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                10
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                4,
                                10
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                5,
                                10
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                10
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                7,
                                10
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                8,
                                10
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                9,
                                10
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                9
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                8
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                7
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                6
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                5
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                4
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                3
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                9,
                                2
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                8,
                                2
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                7,
                                2
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                2
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                5,
                                2
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                4,
                                2
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                2
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 20
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            3
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            9
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            3
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            9
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:plcb===3)",
                "true": [
                    {
                        "type": "changeFloor",
                        "floorId": "Start",
                        "loc": [
                            8,
                            5
                        ],
                        "direction": "right"
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "floorId": "Start",
                        "remove": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                2,
                                1
                            ]
                        ],
                        "floorId": "Start",
                        "remove": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                1
                            ]
                        ],
                        "floorId": "Start",
                        "remove": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                2,
                                9
                            ]
                        ],
                        "floorId": "Start",
                        "remove": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                9
                            ]
                        ],
                        "floorId": "Start",
                        "remove": true
                    },
                    "进入增强时空（第3行重置）",
                    "时空不消耗绿钥匙",
                    {
                        "type": "setValue",
                        "name": "flag:q4",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:zfq===1)",
                "true": [
                    {
                        "type": "changeFloor",
                        "floorId": "boss4_1",
                        "loc": [
                            6,
                            10
                        ]
                    },
                    "loader和怪物的属性大幅增长",
                    {
                        "type": "setEnemy",
                        "id": "loader",
                        "name": "hp",
                        "value": "1000000"
                    },
                    {
                        "type": "setEnemy",
                        "id": "loader",
                        "name": "atk",
                        "value": "60000"
                    },
                    {
                        "type": "setEnemy",
                        "id": "loader",
                        "name": "def",
                        "value": "40000"
                    },
                    {
                        "type": "setEnemy",
                        "id": "loader",
                        "name": "special",
                        "value": "80"
                    },
                    {
                        "type": "setEnemy",
                        "id": "loader",
                        "name": "money",
                        "value": "0"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:zfq",
                        "value": "0"
                    },
                    {
                        "type": "setBlock",
                        "number": "E1060",
                        "loc": [
                            [
                                6,
                                1
                            ]
                        ],
                        "floorId": "boss4_1"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:scq===1)",
                "true": [
                    "欸，为什么这里的墙也消失了？",
                    {
                        "type": "changeFloor",
                        "floorId": "boss4",
                        "loc": [
                            6,
                            9
                        ]
                    },
                    "loader的属性大幅增长",
                    {
                        "type": "setEnemyOnPoint",
                        "loc": [
                            [
                                6,
                                3
                            ]
                        ],
                        "name": "hp",
                        "value": "1000000"
                    },
                    {
                        "type": "setEnemyOnPoint",
                        "loc": [
                            [
                                6,
                                3
                            ]
                        ],
                        "name": "atk",
                        "value": "10000"
                    },
                    {
                        "type": "setEnemyOnPoint",
                        "loc": [
                            [
                                6,
                                3
                            ]
                        ],
                        "name": "def",
                        "value": "0"
                    },
                    {
                        "type": "setEnemy",
                        "id": "loader",
                        "name": "special",
                        "value": "[2,5]"
                    },
                    {
                        "type": "setEnemy",
                        "id": "loader",
                        "name": "money",
                        "value": "0"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:scq",
                        "value": "0"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:plcb===1)",
                "true": [
                    {
                        "type": "choices",
                        "text": "选择下一个解锁的层极\n同一行的选择会互相增加难度",
                        "choices": [
                            {
                                "text": "增幅器",
                                "color": [
                                    44,
                                    159,
                                    193,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "setEnemyOnPoint",
                                        "loc": [
                                            [
                                                6,
                                                3
                                            ]
                                        ],
                                        "name": "hp",
                                        "value": "500000"
                                    },
                                    {
                                        "type": "setEnemyOnPoint",
                                        "loc": [
                                            [
                                                6,
                                                3
                                            ]
                                        ],
                                        "name": "atk",
                                        "value": "60000"
                                    },
                                    {
                                        "type": "setEnemyOnPoint",
                                        "loc": [
                                            [
                                                6,
                                                3
                                            ]
                                        ],
                                        "name": "def",
                                        "value": "20000"
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "loader",
                                        "name": "special",
                                        "value": "4"
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "loader",
                                        "name": "money",
                                        "value": "0"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zfq",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    "loader的属性小幅增长"
                                ]
                            },
                            {
                                "text": "生成器",
                                "color": [
                                    44,
                                    193,
                                    44,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "changeFloor",
                                        "floorId": "boss4_1",
                                        "loc": [
                                            6,
                                            10
                                        ]
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "loader",
                                        "name": "hp",
                                        "value": "1000000"
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "loader",
                                        "name": "atk",
                                        "value": "60000"
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "loader",
                                        "name": "def",
                                        "value": "40000"
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "loader",
                                        "name": "special",
                                        "value": "79"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:scq",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    "loader的属性小幅增长"
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  3],
    [  3,  2,579,  1,  1,  1,  1,  1,  1,  1,577,  2,  3],
    [  3,  2,  1, 33, 81,  0,264,  0, 82,576,  1,  2,  3],
    [  3,  2,  1, 81,  0,  0, 23,  0,  0, 82,  1,  2,  3],
    [  3,  2,  1,  0,  0,  0,  0,  0,  0,  0,  1,  2,  3],
    [  3,  2,  1,  0, 22,  0,1880,  0, 21,  0,  1,  2,  3],
    [  3,  2,  1,  0,  0,  0,  0,  0,  0,  0,  1,  2,  3],
    [  3,  2,  1, 81,  0,  0, 21,  0,  0, 83,  1,  2,  3],
    [  3,  2,  1, 30, 81,  0,  0,  0, 83,579,  1,  2,  3],
    [  3,  2, 59,  1,  1,  1,  1,  1,  1,  1,572,  2,  3],
    [  3,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
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