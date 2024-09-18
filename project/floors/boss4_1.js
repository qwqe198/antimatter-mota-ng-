main.floors.boss4_1=
{
    "floorId": "boss4_1",
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
    "ratio": 2000,
    "defaultGround": "ground",
    "bgm": "2.mp3",
    "firstArrive": [
        "loader发动了[生成器]，生成了一些怪物",
        "loader镀金了[生成器]，转变为[虚生成器]，生成的怪物全都没有战利品",
        {
            "type": "setBlock",
            "number": "a5",
            "loc": [
                [
                    7,
                    3
                ]
            ]
        },
        {
            "type": "sleep",
            "time": 200
        },
        {
            "type": "setBlock",
            "number": "a1",
            "loc": [
                [
                    9,
                    4
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "a5",
            "loc": [
                [
                    3,
                    4
                ]
            ]
        },
        {
            "type": "sleep",
            "time": 200
        },
        {
            "type": "setBlock",
            "number": "a4",
            "loc": [
                [
                    4,
                    5
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "a4",
            "loc": [
                [
                    2,
                    5
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "b3",
            "loc": [
                [
                    6,
                    5
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "a5",
            "loc": [
                [
                    8,
                    5
                ]
            ]
        },
        {
            "type": "sleep",
            "time": 200
        },
        {
            "type": "setBlock",
            "number": "a2",
            "loc": [
                [
                    10,
                    6
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "a5",
            "loc": [
                [
                    5,
                    6
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "a6",
            "loc": [
                [
                    3,
                    6
                ]
            ]
        },
        {
            "type": "sleep",
            "time": 200
        },
        {
            "type": "setBlock",
            "number": "b3",
            "loc": [
                [
                    7,
                    7
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "a2",
            "loc": [
                [
                    4,
                    7
                ]
            ]
        },
        {
            "type": "sleep",
            "time": 200
        },
        {
            "type": "setBlock",
            "number": "a4",
            "loc": [
                [
                    10,
                    8
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "a4",
            "loc": [
                [
                    5,
                    8
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "a5",
            "loc": [
                [
                    3,
                    8
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "a2",
            "loc": [
                [
                    8,
                    8
                ]
            ]
        },
        {
            "type": "sleep",
            "time": 200
        },
        {
            "type": "setBlock",
            "number": "b3",
            "loc": [
                [
                    4,
                    9
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "a6",
            "loc": [
                [
                    9,
                    9
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "a1",
            "loc": [
                [
                    6,
                    9
                ]
            ]
        },
        {
            "type": "sleep",
            "time": 200
        },
        {
            "type": "setBlock",
            "number": "a6",
            "loc": [
                [
                    3,
                    10
                ]
            ]
        },
        "系统提示：拿齐宝石和钥匙即可（门里面的随意）"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,2": [],
        "2,2": [
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
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "6,2": [
            {
                "type": "insert",
                "loc": [
                    6,
                    3
                ],
                "which": "afterBattle",
                "floorId": "boss4"
            },
            {
                "type": "setValue",
                "name": "status:hp",
                "value": "(((item:lcb*1000000)-core.getDamage(null, 6,2))+status:hp)"
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
    [  3,  2,1880,  1, 31,576,264,  1, 31,  4,  4,  2,  3],
    [  3,  2,  0,  1,  0,  1,577,  0,  0,  1,  1,  2,  3],
    [  3,  2, 31,  0,577,  1, 21,  4, 32,  0,  0,  2,  3],
    [  3,  2,  0,  1,  0,  1,  0,  4,  0,  1, 31,  2,  3],
    [  3,  2, 31,  0, 32,  0, 31,576, 32,  1,  0,  2,  3],
    [  3,  2,  1,  1,  0,  1,  1,  0,  1,  1,576,  2,  3],
    [ 47, 83,577,  0,576,  0,579, 34,  0,  0,  0,  2,  3],
    [  3,  2,  1,  1,  0,  1,  0,  1,  1,  0,  1,  2, 21],
    [  3, 81, 32,  0,576,  1, 47,  1,  0, 32, 21, 82,  0],
    [  3, 81,  2,  2,  2,  2, 81,  2,  2,  2,  2,  2, 21],
    [  3, 22,  3,  3, 30, 81, 31, 82,579, 82, 32,  3,  3]
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