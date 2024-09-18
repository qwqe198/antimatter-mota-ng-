main.floors.W22=
{
    "floorId": "W22",
    "title": "火",
    "name": "火",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": 150350,
    "bgm": "1.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(flag:autoqg===1)",
            "true": [
                {
                    "type": "if",
                    "condition": "(core.getDamage('zombie')===0)",
                    "true": [
                        {
                            "type": "battle",
                            "loc": [
                                2,
                                7
                            ]
                        },
                        {
                            "type": "battle",
                            "loc": [
                                5,
                                4
                            ]
                        },
                        {
                            "type": "battle",
                            "loc": [
                                6,
                                7
                            ]
                        },
                        {
                            "type": "battle",
                            "loc": [
                                7,
                                4
                            ]
                        },
                        {
                            "type": "battle",
                            "loc": [
                                7,
                                8
                            ]
                        }
                    ]
                },
                {
                    "type": "if",
                    "condition": "(core.getDamage('zombieKnight')===0)",
                    "true": [
                        {
                            "type": "battle",
                            "loc": [
                                3,
                                5
                            ]
                        },
                        {
                            "type": "battle",
                            "loc": [
                                4,
                                6
                            ]
                        },
                        {
                            "type": "battle",
                            "loc": [
                                9,
                                6
                            ]
                        },
                        {
                            "type": "battle",
                            "loc": [
                                4,
                                10
                            ]
                        },
                        {
                            "type": "battle",
                            "loc": [
                                6,
                                10
                            ]
                        }
                    ]
                },
                {
                    "type": "if",
                    "condition": "(core.getDamage('rock')===0)",
                    "true": [
                        {
                            "type": "battle",
                            "loc": [
                                8,
                                5
                            ]
                        },
                        {
                            "type": "battle",
                            "loc": [
                                8,
                                9
                            ]
                        },
                        {
                            "type": "battle",
                            "loc": [
                                3,
                                8
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,8": {
            "floorId": "W21",
            "loc": [
                12,
                8
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "11,7": [
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
                        "type": "function",
                        "function": "function(){\ncore.resetMap([\"W21\",\"W22\"])\n}"
                    },
                    {
                        "type": "if",
                        "condition": "(item:I729==20)",
                        "true": [
                            {
                                "type": "changeFloor",
                                "floorId": "W21",
                                "loc": [
                                    5,
                                    1
                                ],
                                "direction": "down",
                                "time": 0
                            }
                        ],
                        "false": [
                            {
                                "type": "changeFloor",
                                "floorId": "W21",
                                "loc": [
                                    5,
                                    1
                                ],
                                "direction": "down",
                                "time": 0
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
    [172,172,150280,150281,150282,172,172,172,150280,150281,150282,172,172],
    [172,172,150288,150289,150290,172,172,172,150288,150289,150290,172,172],
    [61012,172,150296,150297,150298,172,172,172,150296,150297,150298,172,172],
    [172,172,150304,150305,150306,172, 27,172,150304,150305,150306,172,172],
    [172,172,172, 29,  0,213,  0,213, 31,  0, 32,172,172],
    [172,172,172,214,172,172,172,172,215,172,172,172,172],
    [172,172,150334,  0,214,  0,172,172,  0,214,  0,172,172],
    [  0,  0,213, 34,172, 28,213,  0, 27,172, 31,216,172],
    [699,172,172,215,172,172,172,213,172,172,172,172,172],
    [172,172,172,  0,172,172,172,  0,215,  0,172,172,172],
    [172,172,172, 28,214,  0,214, 29,172, 27,172,172,60997],
    [61011,172,172,172,172, 32,172,172,172,172,172,172,61005],
    [61019,61020,172,172,172,172,172,172,172,172,172,172,172]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,150045,  0,  0,  0,  0,  0,150045,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,150326,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

]
}