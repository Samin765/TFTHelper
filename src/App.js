import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import TraitsQuiz from "./pages/TraitsQuiz";
import _ from 'lodash';
import { useEffect } from 'react';



const tftComponents = [
  {
    title: "B.F Sword",
    id: 1,
    imageUrl: "https://rerollcdn.com/items/BFSword.png",
  },
  {
    title: "Chain Vest",
    id: 2,
    imageUrl: "https://rerollcdn.com/items/ChainVest.png",
  },
  {
    title: "Giants Belt",
    id: 3,
    imageUrl: "https://rerollcdn.com/items/GiantsBelt.png",
  },
  {
    title: "Needlessly Large Rod",
    id: 4,
    imageUrl: "https://rerollcdn.com/items/NeedlesslyLargeRod.png",
  },
  {
    title: "Negatron Cloak",
    id: 5,
    imageUrl: "https://rerollcdn.com/items/NegatronCloak.png",
  },
  {
    title: "Recurve Bow",
    id: 6,
    imageUrl: "https://rerollcdn.com/items/RecurveBow.png",
  },
  {
    title: "Sparring Gloves",
    id: 7,
    imageUrl: "https://rerollcdn.com/items/SparringGloves.png",
  },
  {
    title: "Spatula",
    id: 8,
    imageUrl: "https://rerollcdn.com/items/Spatula.png",
  },
  {
    title: "Tear of the Goddess",
    id: 9,
    imageUrl: "https://rerollcdn.com/items/TearoftheGoddess.png",
  },
];

const tftCompletedItems = [
  {
    title: "Archangel's Staff",
    id: 1,
    imageUrl: "https://rerollcdn.com/items/ArchangelsStaff.png",
    components: [4, 9],
  },
  {
    title: "Bloodthirster",
    id: 1,
    imageUrl: "https://rerollcdn.com/items/Bloodthirster.png",
    components: [1, 5],
  },
  {
    title: "Blue Buff",
    id: 2,
    imageUrl: "https://rerollcdn.com/items/BlueBuff.png",
    components: [9, 9],
  },
  {
    title: "Bramble Vest",
    id: 3,
    imageUrl: "https://rerollcdn.com/items/BrambleVest.png",
    components: [2, 2],
  },
  {
    title: "Crownguard",
    id: 4,
    imageUrl: "https://rerollcdn.com/items/Crownguard.png",
    components: [2, 4],
  },
  {
    title: "Deathblade",
    id: 5,
    imageUrl: "https://rerollcdn.com/items/Deathblade.png",
    components: [1, 1],
  },
  {
    title: "Dragon's Claw",
    id: 6,
    imageUrl: "https://rerollcdn.com/items/DragonsClaw.png",
    components: [5, 5],
  },
  {
    title: "Edge of Night",
    id: 7,
    imageUrl: "https://rerollcdn.com/items/EdgeofNight.png",
    components: [1, 2],
  },
  {
    title: "Evenshroud",
    id: 8,
    imageUrl: "https://rerollcdn.com/items/Evenshroud.png",
    components: [3, 5],
  },
  {
    title: "Gargoyle Stoneplate",
    id: 9,
    imageUrl: "https://rerollcdn.com/items/GargoyleStoneplate.png",
    components: [2, 5],
  },
  {
    title: "Giant Slayer",
    id: 10,
    imageUrl: "https://rerollcdn.com/items/GiantSlayer.png",
    components: [1, 6],
  },
  {
    title: "Guardbreaker",
    id: 11,
    imageUrl: "https://rerollcdn.com/items/Guardbreaker.png",
    components: [3, 7],
  },
  {
    title: "Guinsoo's Rageblade",
    id: 12,
    imageUrl: "https://rerollcdn.com/items/GuinsoosRageblade.png",
    components: [6, 4],
  },
  {
    title: "Hand of Justice",
    id: 13,
    imageUrl: "https://rerollcdn.com/items/HandofJustice.png",
    components: [9, 7],
  },
  {
    title: "Hextech Gunblade",
    id: 14,
    imageUrl: "https://rerollcdn.com/items/HextechGunblade.png",
    components: [1, 4],
  },
  {
    title: "Infinity Edge",
    id: 15,
    imageUrl: "https://rerollcdn.com/items/InfinityEdge.png",
    components: [1, 7],
  },
  {
    title: "Ionic Spark",
    id: 16,
    imageUrl: "https://rerollcdn.com/items/IonicSpark.png",
    components: [4, 5],
  },
  {
    title: "Jeweled Gauntlet",
    id: 17,
    imageUrl: "https://rerollcdn.com/items/JeweledGauntlet.png",
    components: [4, 7],
  },
  {
    title: "Last Whisper",
    id: 18,
    imageUrl: "https://rerollcdn.com/items/LastWhisper.png",
    components: [6, 7],
  },
  {
    title: "Morellonomicon",
    id: 19,
    imageUrl: "https://rerollcdn.com/items/Morellonomicon.png",
    components: [4, 3],
  },
  {
    title: "Nashoor's Tooth",
    id: 20,
    imageUrl: "https://rerollcdn.com/items/NashorsTooth.png",
    components: [3, 6],
  },
  {
    title: "Protector's Vow",
    id: 21,
    imageUrl: "https://rerollcdn.com/items/ProtectorsVow.png",
    components: [2, 9],
  },
  {
    title: "Quicksilver",
    id: 22,
    imageUrl: "https://rerollcdn.com/items/Quicksilver.png",
    components: [5, 7],
  },
  {
    title: "Rabadon's Deathcap",
    id: 23,
    imageUrl: "https://rerollcdn.com/items/RabadonsDeathcap.png",
    components: [4, 4],
  },
  {
    title: "Red Buff",
    id: 24,
    imageUrl: "https://rerollcdn.com/items/RedBuff.png",
    components: [6, 6],
  },
  {
    title: "Redemption",
    id: 25,
    imageUrl: "https://rerollcdn.com/items/Redemption.png",
    components: [3, 9],
  },
  {
    title: "Runaan's Hurricane",
    id: 26,
    imageUrl: "https://rerollcdn.com/items/RunaansHurricane.png",
    components: [5, 6],
  },
  {
    title: "Spear of Shojin",
    id: 27,
    imageUrl: "https://rerollcdn.com/items/SpearofShojin.png",
    components: [1, 9],
  },
  {
    title: "Statikk Shiv",
    id: 28,
    imageUrl: "https://rerollcdn.com/items/StatikkShiv.png",
    components: [6, 9],
  },
  {
    title: "Steadfast Heart",
    id: 29,
    imageUrl: "https://rerollcdn.com/items/SteadfastHeart.png",
    components: [2, 7],
  },
  {
    title: "Sterak's Gage",
    id: 30,
    imageUrl: "https://rerollcdn.com/items/SteraksGage.png",
    components: [1, 3],
  },
  {
    title: "Sunfire Cape",
    id: 31,
    imageUrl: "https://rerollcdn.com/items/SunfireCape.png",
    components: [2, 3],
  },
  {
    title: "Tactician's Crown",
    id: 32,
    imageUrl: "https://rerollcdn.com/items/TacticiansCrown.png",
    components: [8, 8],
  },
  {
    title: "Thief's Gloves",
    id: 33,
    imageUrl: "https://rerollcdn.com/items/ThiefsGloves.png",
    components: [7, 7],
  },
  {
    title: "Titan's Resolve",
    id: 34,
    imageUrl: "https://rerollcdn.com/items/TitansResolve.png",
    components: [2, 6],
  },
  {
    title: "Warmog's Armor",
    id: 35,
    imageUrl: "https://rerollcdn.com/items/WarmogsArmor.png",
    components: [3, 3],
  },
];

const champions = [
  {
    title: "Aatrox",
    id: 1,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Aatrox.png",
  },
  {
    title: "Ahri",
    id: 2,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Ahri.png",
  },
  {
    title: "Akali",
    id: 3,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Akali.png",
  },
  {
    title: "Akshan",
    id: 4,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/akshan.png",
  },
  {
    title: "Alistar",
    id: 5,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/alistar.png",
  },
  {
    title: "Amumu",
    id: 6,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/amumu.png",
  },
  {
    title: "Anivia",
    id: 7,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/anivia.png",
  },
  {
    title: "Annie",
    id: 8,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Annie.png",
  },
  {
    title: "Aphelios",
    id: 9,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Aphelios.png",
  },
  {
    title: "Ashe",
    id: 10,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Ashe.png",
  },
  {
    title: "Aurelion Sol",
    id: 11,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/aurelionsol.png",
  },
  {
    title: "Azir",
    id: 12,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Azir.png",
  },
  {
    title: "Bard",
    id: 13,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Bard.png",
  },
  {
    title: "Bel'veth",
    id: 14,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/belveth.png",
  },
  {
    title: "Blitzcrank",
    id: 15,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Blitzcrank.png",
  },
  {
    title: "Brand",
    id: 16,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/brand.png",
  },
  {
    title: "Braum",
    id: 17,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/braum.png",
  },
  {
    title: "Briar",
    id: 18,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Briar.png",
  },
  {
    title: "Caitlyn",
    id: 19,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Caitlyn.png",
  },
  {
    title: "Camille",
    id: 20,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Camille.png",
  },
  {
    title: "Cassiopeia",
    id: 21,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Cassiopeia.png",
  },
  {
    title: "Cho'gath",
    id: 22,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Chogath.png",
  },
  {
    title: "Corki",
    id: 23,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/corki.png",
  },
  {
    title: "Darius",
    id: 24,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Darius.png",
  },
  {
    title: "Diana",
    id: 25,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Diana.png",
  },
  {
    title: "Dr. Mundo",
    id: 26,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/drmundo.png",
  },
  {
    title: "Draven",
    id: 27,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/draven.png",
  },
  {
    title: "Ekko",
    id: 28,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/ekko.png",
  },
  {
    title: "Elise",
    id: 29,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Elise.png",
  },
  {
    title: "Evelynn",
    id: 30,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/evelynn.png",
  },
  {
    title: "Ezreal",
    id: 31,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Ezreal.png",
  },
  {
    title: "Fiddlesticks",
    id: 32,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/fiddlesticks.png",
  },
  {
    title: "Fiora",
    id: 33,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Fiora.png",
  },
  {
    title: "Fizz",
    id: 34,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/fizz.png",
  },
  {
    title: "Galio",
    id: 35,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Galio.png",
  },
  {
    title: "Gangplank",
    id: 36,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/gangplank.png",
  },
  {
    title: "Garen",
    id: 37,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Garen.png",
  },
  {
    title: "Gnar",
    id: 38,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Gnar.png",
  },
  {
    title: "Gragas",
    id: 39,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/gragas.png",
  },
  {
    title: "Graves",
    id: 40,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/graves.png",
  },
  {
    title: "Gwen",
    id: 41,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Gwen.png",
  },
  {
    title: "Hecarim",
    id: 42,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Hecarim.png",
  },
  {
    title: "Heimerdinger",
    id: 43,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/heimerdinger.png",
  },
  {
    title: "Hwei",
    id: 44,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Hwei.png",
  },
  {
    title: "Illaoi",
    id: 45,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Illaoi.png",
  },
  {
    title: "Irelia",
    id: 46,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Irelia.png",
  },
  {
    title: "Ivern",
    id: 47,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/ivern.png",
  },
  {
    title: "Janna",
    id: 48,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Janna.png",
  },
  {
    title: "Jarvan IV",
    id: 49,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/jarvaniv.png",
  },
  {
    title: "Jax",
    id: 50,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Jax.png",
  },
  {
    title: "Jayce",
    id: 51,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Jayce.png",
  },
  {
    title: "Jhin",
    id: 52,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/jhin.png",
  },
  {
    title: "Jinx",
    id: 53,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Jinx.png",
  },
  {
    title: "K'sante",
    id: 54,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/ksante.png",
  },
  {
    title: "Kai'sa",
    id: 55,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Kaisa.png",
  },
  {
    title: "Kalista",
    id: 56,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Kalista.png",
  },
  {
    title: "Karma",
    id: 57,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Karma.png",
  },
  {
    title: "Karthus",
    id: 58,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/karthus.png",
  },
  {
    title: "Kassadin",
    id: 59,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Kassadin.png",
  },
  {
    title: "Katarina",
    id: 60,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Katarina.png",
  },
  {
    title: "Kayle",
    id: 61,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Kayle.png",
  },
  {
    title: "Kennen",
    id: 62,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/kennen.png",
  },
  {
    title: "Kha'zix",
    id: 63,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Khazix.png",
  },
  {
    title: "Kindred",
    id: 64,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Kindred.png",
  },
  {
    title: "Kled",
    id: 65,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/kled.png",
  },
  {
    title: "Kog'Maw",
    id: 66,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/KogMaw.png",
  },
  {
    title: "Leblanc",
    id: 67,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/leblanc.png",
  },
  {
    title: "Lee Sin",
    id: 68,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/LeeSin.png",
  },
  {
    title: "Leona",
    id: 69,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/leona.png",
  },
  {
    title: "Lillia",
    id: 70,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Lillia.png",
  },
  {
    title: "Lissandra",
    id: 71,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Lissandra.png",
  },
  {
    title: "Lucian",
    id: 72,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/lucian.png",
  },
  {
    title: "Lulu",
    id: 73,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/lulu.png",
  },
  {
    title: "Lux",
    id: 74,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Lux.png",
  },
  {
    title: "Malphite",
    id: 75,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Malphite.png",
  },
  {
    title: "Malzahar",
    id: 76,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/malzahar.png",
  },
  {
    title: "Maokai",
    id: 77,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/maokai.png",
  },
  {
    title: "Master YI",
    id: 78,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/masteryi.png",
  },
  {
    title: "Milio",
    id: 79,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Milio.png",
  },
  {
    title: "Miss Fortune",
    id: 80,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/missfortune.png",
  },
  {
    title: "Mordekaiser",
    id: 81,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Mordekaiser.png",
  },
  {
    title: "Morgana",
    id: 82,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Morgana.png",
  },
  {
    title: "Naafiri",
    id: 83,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/naafiri.png",
  },
  {
    title: "Nami",
    id: 84,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Nami.png",
  },
  {
    title: "Nasus",
    id: 85,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Nasus.png",
  },
  {
    title: "Nautilus",
    id: 86,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/nautilus.png",
  },
  {
    title: "Neeko",
    id: 87,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Neeko.png",
  },
  {
    title: "Nidalee",
    id: 88,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/nidalee.png",
  },
  {
    title: "Nilah",
    id: 89,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Nilah.png",
  },
  {
    title: "Nocturne",
    id: 90,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/nocturne.png",
  },
  {
    title: "Nunu & Willump",
    id: 91,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Nunu.png",
  },
  {
    title: "Olaf",
    id: 92,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Olaf.png",
  },
  {
    title: "Orianna",
    id: 93,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/orianna.png",
  },
  {
    title: "Ornn",
    id: 94,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Ornn.png",
  },
  {
    title: "Pantheon",
    id: 95,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/pantheon.png",
  },
  {
    title: "Poppy",
    id: 96,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Poppy.png",
  },
  {
    title: "Pyke",
    id: 97,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/pyke.png",
  },
  {
    title: "Qiyana",
    id: 98,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Qiyana.png",
  },
  {
    title: "Quinn",
    id: 99,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/quinn.png",
  },
  {
    title: "Rakan",
    id: 100,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Rakan.png",
  },
  {
    title: "Rammus",
    id: 101,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/rammus.png",
  },
  {
    title: "Rek'sai",
    id: 102,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/RekSai.png",
  },
  {
    title: "Rell",
    id: 103,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/rell.png",
  },
  {
    title: "Renata Glasc",
    id: 104,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/renataglasc.png",
  },
  {
    title: "Renekton",
    id: 105,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/renekton.png",
  },
  {
    title: "Rengar",
    id: 106,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/rengar.png",
  },
  {
    title: "Riven",
    id: 107,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Riven.png",
  },
  {
    title: "Rumble",
    id: 108,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Rumble.png",
  },
  {
    title: "Ryze",
    id: 109,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Ryze.png",
  },
  {
    title: "Samira",
    id: 110,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/samira.png",
  },
  {
    title: "Sejuani",
    id: 111,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/sejuani.png",
  },
  {
    title: "Senna",
    id: 112,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Senna.png",
  },
  {
    title: "Seraphine",
    id: 113,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Seraphine.png",
  },
  {
    title: "Sett",
    id: 114,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Sett.png",
  },
  {
    title: "Shaco",
    id: 115,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/shaco.png",
  },
  {
    title: "Shen",
    id: 116,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Shen.png",
  },
  {
    title: "Shyvana",
    id: 117,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Shyvana.png",
  },
  {
    title: "Singed",
    id: 118,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/singed.png",
  },
  {
    title: "Sion",
    id: 119,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/sion.png",
  },
  {
    title: "Sivir",
    id: 120,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Sivir.png",
  },
  {
    title: "Skarner",
    id: 121,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/skarner.png",
  },
  {
    title: "Smolder",
    id: 122,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/smolder.png",
  },
  {
    title: "Sona",
    id: 123,
    imageUrl:
      "https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/sona.png",
  },
  {
    title: "Soraka",
    id: 124,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Soraka.png",
  },
  {
    title: "Swain",
    id: 125,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Swain.png",
  },
  {
    title: "Sylas",
    id: 126,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Sylas.png",
  },
  {
    title: "Syndra",
    id: 127,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Syndra.png",
  },
  {
    title: "Tahm Kench",
    id: 128,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/TahmKench.png",
  },
  {
    title: "Taliyah",
    id: 129,
    imageUrl: "https://rerollcdn.com/items/RedBuff.png",
  },
  {
    title: "Talon",
    id: 130,
    imageUrl: "https://rerollcdn.com/items/Redemption.png",
  },
  {
    title: "Taric",
    id: 131,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Taric.png",
  },
  {
    title: "Teemo",
    id: 132,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Teemo.png",
  },
  {
    title: "Thresh",
    id: 133,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Thresh.png",
  },
  {
    title: "Tristana",
    id: 134,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Tristana.png",
  },
  {
    title: "Trundle",
    id: 135,
    imageUrl: "https://rerollcdn.com/items/SteraksGage.png",
  },
  {
    title: "Tryndamere",
    id: 136,
    imageUrl: "https://rerollcdn.com/items/SunfireCape.png",
  },
  {
    title: "Twisted Fate",
    id: 137,
    imageUrl: "https://rerollcdn.com/items/TacticiansCrown.png",
  },
  {
    title: "Twitch",
    id: 138,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Twitch.png",
  },
  {
    title: "Udyr",
    id: 139,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Udyr.png",
  },
  {
    title: "Urgot",
    id: 140,
    imageUrl: "https://rerollcdn.com/items/WarmogsArmor.png",
  },
  {
    title: "Varuys",
    id: 141,
    imageUrl: "https://rerollcdn.com/items/SparringGloves.png",
  },
  {
    title: "Vayne",
    id: 142,
    imageUrl: "https://rerollcdn.com/items/Spatula.png",
  },
  {
    title: "Veigar",
    id: 143,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Veigar.png",
  },
  {
    title: "Vel'koz",
    id: 144,
    imageUrl: "https://rerollcdn.com/items/Morellonomicon.png",
  },
  {
    title: "Vex",
    id: 145,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Vex.png",
  },
  {
    title: "Vi",
    id: 146,
    imageUrl: "https://rerollcdn.com/items/ProtectorsVow.png",
  },
  {
    title: "Viego",
    id: 147,
    imageUrl: "https://rerollcdn.com/items/Quicksilver.png",
  },
  {
    title: "Viktor",
    id: 148,
    imageUrl: "https://rerollcdn.com/items/RabadonsDeathcap.png",
  },
  {
    title: "Vladimir",
    id: 149,
    imageUrl: "https://rerollcdn.com/items/RedBuff.png",
  },
  {
    title: "Volibear",
    id: 150,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Volibear.png",
  },
  {
    title: "Warwick",
    id: 151,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Warwick.png",
  },
  {
    title: "Wukong",
    id: 152,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Wukong.png",
  },
  {
    title: "Xayah",
    id: 153,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Xayah.png",
  },
  {
    title: "Xerath",
    id: 154,
    imageUrl: "https://rerollcdn.com/items/SteadfastHeart.png",
  },
  {
    title: "Xin Zhao",
    id: 155,
    imageUrl: "https://rerollcdn.com/items/SteraksGage.png",
  },
  {
    title: "Yasuo",
    id: 156,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Yasuo.png",
  },
  {
    title: "Yone",
    id: 157,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Yone.png",
  },
  {
    title: "Yorick",
    id: 158,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Yorick.png",
  },
  {
    title: "Yuumi",
    id: 159,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Norra&Yuumi.png",
  },
  {
    title: "Zac",
    id: 160,
    imageUrl: "https://rerollcdn.com/items/WarmogsArmor.png",
  },
  {
    title: "Zed",
    id: 161,
    imageUrl: "https://rerollcdn.com/items/RunaansHurricane.png",
  },
  {
    title: "Zeri",
    id: 162,
    imageUrl: "https://rerollcdn.com/items/SpearofShojin.png",
  },
  {
    title: "Ziggs",
    id: 163,
    imageUrl: "https://rerollcdn.com/items/StatikkShiv.png",
  },
  {
    title: "Zileans",
    id: 164,
    imageUrl: "https://rerollcdn.com/items/SteadfastHeart.png",
  },
  {
    title: "Zoe",
    id: 165,
    imageUrl: "https://rerollcdn.com/items/SteraksGage.png",
  },
  {
    title: "Zyra",
    id: 166,
    imageUrl: "https://rerollcdn.com/characters/Skin/11/Zyra.png",
  },
  {
    title: "Nomsy",
    id: 167,
    imageUrl: "https://rerollcdn.com/characters/Skin/12/Nomsy.png",
  },
];

const activeChampionTitles = [
  "Ashe",
  "Blitzcrank",
  "Elise",
  "Jax",
  "Jayce",
  "Lilia",
  "Nomsy",
  " Poppy",
  "Seraphine",
  "Soraka",
  "Twitch",
  "Warwick",
  " Ahri",
  "Akali",
  " Cassiopeia",
  "Galio",
  " Kassadin",
  "KogMaw",
  "Nilah",
  " Nunu",
  "Rumble",
  "Shyvana",
  " Syndra",
  " Tristana",
  "Bard",
  "Ezreal",
  "Hecarim",
  "Hwei",
  "Jinx",
  "Katarina",
  "Mordekaiser",
  "Neeko",
  "Shen",
  "Swain",
  "Veigar",
  " Vex",
  "Wukong",
  "Fiora",
  "Gwen",
  "Kalista",
  "Karma",
  "Nami",
  "Nasus",
  "Olaf",
  "Rakan",
  "Ryze",
  "Tahm Kench",
  "Taric",
  "Briar",
  "Camille",
  "Diana",
  "Milio",
  "Morgana",
  "Yuumi",
  "Smolder",
  " Xerath",
]; // List of titles to include in activeChampions

const activeChampions = champions.filter((champion) =>
  activeChampionTitles.includes(champion.title)
);

const set12Traits = [
  {
    title: "Arcana",
    id: 1,
    imageUrl: "https://rerollcdn.com/icons/arcana.png",
  },
  {
    title: "Chrono",
    id: 2,
    imageUrl: "https://rerollcdn.com/icons/chrono.png",
  },
  {
    title: "Dragon",
    id: 3,
    imageUrl: "https://rerollcdn.com/icons/dragon.png",
  },
  { title: "Druid", id: 4, imageUrl: "https://rerollcdn.com/icons/druid.png" },
  {
    title: "Eldritch",
    id: 5,
    imageUrl: "https://rerollcdn.com/icons/eldritch.png",
  },
  {
    title: "Faerie",
    id: 6,
    imageUrl: "https://rerollcdn.com/icons/faerie.png",
  },
  { title: "Frost", id: 7, imageUrl: "https://rerollcdn.com/icons/frost.png" },
  {
    title: "Honeymancy",
    id: 8,
    imageUrl: "https://rerollcdn.com/icons/honeymancy.png",
  },
  {
    title: "Portal",
    id: 9,
    imageUrl: "https://rerollcdn.com/icons/portal.png",
  },
  { title: "Pyro", id: 10, imageUrl: "https://rerollcdn.com/icons/pyro.png" },
  {
    title: "Ravenous",
    id: 11,
    imageUrl: "https://rerollcdn.com/icons/ravenous.png",
  },
  {
    title: "Sugarcraft",
    id: 12,
    imageUrl: "https://rerollcdn.com/icons/sugarcraft.png",
  },
  {
    title: "Witchcraft",
    id: 13,
    imageUrl: "https://rerollcdn.com/icons/witchcraft.png",
  },
  {
    title: "Ascendant",
    id: 14,
    imageUrl: "https://rerollcdn.com/icons/ascendant.png",
  },
  {
    title: "Bastion",
    id: 15,
    imageUrl: "https://rerollcdn.com/icons/bastion.png",
  },
  {
    title: "Bat Queen",
    id: 16,
    imageUrl: "https://rerollcdn.com/icons/batqueen.png",
  },
  {
    title: "Best Friends",
    id: 17,
    imageUrl: "https://rerollcdn.com/icons/bestfriends.png",
  },
  {
    title: "Blaster",
    id: 18,
    imageUrl: "https://rerollcdn.com/icons/blaster.png",
  },
  {
    title: "Hunter",
    id: 19,
    imageUrl: "https://rerollcdn.com/icons/hunter.png",
  },
  {
    title: "Incantor",
    id: 20,
    imageUrl: "https://rerollcdn.com/icons/incantor.png",
  },
  { title: "Mage", id: 21, imageUrl: "https://rerollcdn.com/icons/mage.png" },
  {
    title: "Multistriker",
    id: 22,
    imageUrl: "https://rerollcdn.com/icons/multistriker.png",
  },
  {
    title: "Preserver",
    id: 23,
    imageUrl: "https://rerollcdn.com/icons/preserver.png",
  },
  {
    title: "Scholar",
    id: 24,
    imageUrl: "https://rerollcdn.com/icons/scholar.png",
  },
  {
    title: "Shapeshifter",
    id: 25,
    imageUrl: "https://rerollcdn.com/icons/shapeshifter.png",
  },
  {
    title: "Vanguard",
    id: 26,
    imageUrl: "https://rerollcdn.com/icons/vanguard.png",
  },
  {
    title: "Warrior",
    id: 27,
    imageUrl: "https://rerollcdn.com/icons/warrior.png",
  },
];

// Trait mapping
const championTraits = {
  Ashe: ["Eldritch", "Multistriker"],
  Blitzcrank: ["Honeymancy", "Vanguard"],
  Elise: ["Eldritch", "Shapeshifter"],
  Jax: ["Chrono", "Multistriker"],
  Jayce: ["Portal", "Shapeshifter"],
  Lillia: ["Faerie", "Bastion"],
  Nomsy: ["Dragon", "Hunter"],
  Poppy: ["Witchcraft", "Bastion"],
  Seraphine: ["Faerie", "Mage"],
  Soraka: ["Sugarcraft", "Mage"],
  Twitch: ["Frost", "Hunter"],
  Warwick: ["Frost", "Vanguard"],
  Ahri: ["Arcana", "Scholar"],
  Akali: ["Pyro", "Warrior", "Multistriker"],
  Cassiopeia: ["Witchcraft", "Incantor"],
  Galio: ["Portal", "Vanguard", "Mage"],
  Kassadin: ["Portal", "Multistriker"],
  KogMaw: ["Honeymancy", "Hunter"],
  Nilah: ["Eldritch", "Warrior"],
  Nunu: ["Honeymancy", "Bastion"],
  Rumble: ["Sugarcraft", "Vanguard", "Blaster"],
  Shyvana: ["Dragon", "Shapeshifter"],
  Syndra: ["Eldritch", "Incantor"],
  Tristana: ["Faerie", "Blaster"],
  Bard: ["Sugarcraft", "Preserver", "Scholar"],
  Ezreal: ["Portal", "Blaster"],
  Hecarim: ["Arcana", "Bastion", "Multistriker"],
  Hwei: ["Frost", "Blaster"],
  Jinx: ["Sugarcraft", "Hunter"],
  Katarina: ["Faerie", "Warrior"],
  Mordekaiser: ["Eldritch", "Vanguard"],
  Neeko: ["Witchcraft", "Shapeshifter"],
  Shen: ["Pyro", "Bastion"],
  Swain: ["Frost", "Shapeshifter"],
  Veigar: ["Honeymancy", "Mage"],
  Vex: ["Chrono", "Mage"],
  Wukong: ["Druid"],
  Fiora: ["Witchcraft", "Warrior"],
  Gwen: ["Sugarcraft", "Warrior"],
  Kalista: ["Faerie", "Multistriker"],
  Karma: ["Chrono", "Incantor"],
  Nami: ["Eldritch", "Mage"],
  Nasus: ["Pyro", "Shapeshifter"],
  Olaf: ["Frost", "Hunter"],
  Rakan: ["Faerie", "Preserver"],
  Ryze: ["Portal", "Scholar"],
  "Tahm Kench": ["Arcana", "Vanguard"],
  Taric: ["Portal", "Bastion"],
  Briar: ["Ravenous", "Eldritch", "Shapeshifter"],
  Camille: ["Chrono", "Multistriker"],
  Diana: ["Frost", "Bastion"],
  Milio: ["Faerie", "Scholar"],
  Morgana: ["Witchcraft", "Bat Queen", "Preserver"],
  Yuumi: ["Portal", "Best Friends", "Mage"],
  Smolder: ["Dragon", "Blaster"],
  Xerath: ["Arcana", "Ascendant"],
};

// Add traits to active champions
activeChampions.forEach((champion) => {
  champion.traits = championTraits[champion.title] || [];
});

function App() {
  const [count, setCount] = useState(0);

  const number = Math.floor(Math.random() * activeChampions.length);

  const [randomChampion, setRandomChampion] = useState(number);

  const [selectedChampions, setSelectedChampion] = useState([]);

  const [height, setHeight] = useState('1%'); // Start with 0% height



  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * activeChampions.length);
    setRandomChampion(number);
    setCount(count +1);
    setSelectedChampion([]);
  };

  function handleClick() {
    // alert('You clicked me!' );
    setCount(count + 1);
  }
  let progress = document.getElementById('progressbar');
  let totalHeigth = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function(){
    let scrolledHeight = (window.scrollY / totalHeigth) * 100;

    setHeight(`${scrolledHeight}%`);

  }

  let content;
  let isLoggedIn = true;
  if (isLoggedIn) {
    content = <Admin />;
  } else {
    content = <User />;
  }

  return (
    <div className="App">
      <div className="background"></div>
      <div className="progressbar"
      style={{ height: height }}></div>
      <div className="scrollPath"></div>

      <Quiz 
        randomChampion={randomChampion}
        generateRandomNumber={generateRandomNumber}  
        selectedChampions={selectedChampions}
        setSelectedChampion = {setSelectedChampion}
      />
      <ShowTraits
      randomChampion={randomChampion}
      generateRandomNumber={generateRandomNumber}
      selectedChampions={selectedChampions}
      setSelectedChampion = {setSelectedChampion}
      />
      <hr className="divider"></hr>

      <h1 className="kanitfont">CHEAT SHEET</h1>
      <ShowChampions />

      <AboutPage></AboutPage>
    </div>
  );
}

function ProgressBar () {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrolledHeight = (window.pageYOffset / totalHeight) * 100;
      setProgress(scrolledHeight);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="progress-bar" style={{ height: `${progress}%` }}></div>
  );
};


function AboutPage() {
  return (
    <div className="about-container">
      <h1>UNDER DEVELOPMENT</h1>
      <p>
        {" "}
        TFTHelper is a summer project created by{" "}
        <a
          href="https://samin765.github.io/PortfolioPage/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {userTest.name}
        </a>
      </p>
      <p>
        {" "}
        Feel free to reach out to samin@3138@gmail.com for any suggestions or
        improvements
      </p>
    </div>
  );
}

function Quiz({
  className,
  randomChampion,
  generateRandomNumber,
  setSelectedChampion,
  selectedChampions,
}) {
  const currentChampion = activeChampions[randomChampion];
  const list1 = currentChampion.traits;

  const correctTraits = _.intersection(list1, selectedChampions);
  const numberOfCorrectTraits = correctTraits.length;
  const totalTraits = list1.length;

  const percentageCorrect =
    totalTraits > 0 ? (numberOfCorrectTraits / totalTraits) * 100 : 0;

  return (
    <div className={className}>
      <button className=" ButtonFire" onClick={generateRandomNumber}>
        Get Random Champion
      </button>
      <div className="">
        {activeChampions
          .slice(randomChampion, randomChampion + 1)
          .map((item) => (
            <div key={item.id} className="quiz-champion-image-container">
              <div className="quiz-trait-item">
              <div
                  className="quiz-champion-image-wrapper"
                  style={{ 
                    '--percentage-correct': `${percentageCorrect}%` 
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="quiz-champion-image"
                  />
                </div>
                <p className="quiz-champion-name">{item.title} </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function ShowComponents() {
  return (
    <div className="grid-container">
      {tftComponents.map((item) => (
        <div key={item.id} className="grid-item">
          <img src={item.imageUrl} alt={item.title} />
        </div>
      ))}
    </div>
  );
}

function ShowTraits({randomChampion , generateRandomNumber, setSelectedChampion , selectedChampions }) {
 
  const currentChampion = activeChampions[randomChampion];
  const list1 = currentChampion.traits;

  if(_.isEqual(list1, selectedChampions)){
    generateRandomNumber();
  }


   // Handler function to update the selectedChampions state
   const addSelectedChampions = (title) => {
     setSelectedChampion((prevSelectedChampions) => {
       // Check if the title already exists in the array
       if (!prevSelectedChampions.includes(title)) {
         return [...prevSelectedChampions, title];
       }
       // If the title already exists, remove it
       const index = prevSelectedChampions.findIndex((champion) => champion == title);
       if(index != -1){
        const newSelectedChampions = [...prevSelectedChampions];
        newSelectedChampions.splice(index, 1);
        return newSelectedChampions;
       }
       return prevSelectedChampions;
     });
   };
   return (
     <div className="grid-container">

       {set12Traits.map((item) =>{
        const isSelected = selectedChampions.includes(item.title);
        const selectedClassName = isSelected ? 'trait-item-selected' : ' trait-item'

        return (
         <div key={item.id} className="grid-quiz-item">
           <div
             className={selectedClassName}
             onClick={() => addSelectedChampions(item.title)}
           >
             <img
               src={item.imageUrl}
               alt={item.title}
               className="component-quiz-image"
               onClick={() => generateRandomNumber}
             />
             <p className="trait-text">{item.title}</p>
           </div>
         </div>
         
        )
})}
       
     </div>
   );
}

function ShowChampions({ className }) {
  const [selectedTraits, setSelectedTraits] = useState(null);

  return (
    <div className={className}>
      <div className="grid-container">
        {activeChampions.map((item) => (
          <div key={item.id} className="grid-item">
            <div className="tooltip-container">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="champion-image"
              />
              <div className="tooltip">{item.title}</div>
            </div>
            <div className="component-container">
              {item.traits.map((traitTitle) => {
                const trait = set12Traits.find(
                  (trait) => trait.title === traitTitle
                );
                return (
                  <div key={traitTitle} className="tooltip-container">
                    <img
                      src={trait.imageUrl}
                      alt={trait.title}
                      className="component-image"
                    />
                    <div className="tooltip">{trait.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShowItems({ className }) {
  return (
    <div className={className}>
      <div className="grid-container">
        {tftCompletedItems.map((item) => (
          <div key={item.id} className="grid-item">
            <div className="tooltip-container">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="item-image"
              />
              <div className="tooltip">{item.title}</div>
            </div>
            <div className="component-container">
              {item.components?.map((compId) => {
                const component = tftComponents.find(
                  (comp) => comp.id === compId
                );
                return (
                  <div key={compId} className="tooltip-container">
                    <img
                      src={component.imageUrl}
                      alt={component.title}
                      className="component-image"
                    />
                    <div className="tooltip">{component.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Admin() {
  return (
    <div>
      <img src={AdminTest.imageUrl}></img>
    </div>
  );
}

function User() {
  return (
    <div>
      <img src={userTest.imageUrl}></img>
    </div>
  );
}

const userTest = {
  name: "Samin",
  lastName: "Chowdhury",
  imageUrl: "https://i.imgur.com/H3vo6s7.png",
};

const AdminTest = {
  name: "Admin",
  lastName: "Chowdhury",
  imageUrl: "https://i.imgur.com/qYr3vp8.png",
};

export default App;
