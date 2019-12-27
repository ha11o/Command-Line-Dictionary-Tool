#!/bin/bash

word=$1
node dict.js defn $word
node dict.js syn  $word
node dict.js atn  $word
node dict.js ex   $word
node dict.js word
node dict.js
