import { LinkedList } from "./LinkedList.js";

const HashMap = function() {
    this.buckets = new Array(16);
    this.filled = 0;
    this.capacity = this.buckets.length;
    this.loadFactor = 0.75;


    this.hash = function(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
          hashCode %= 16; //  apply the  % modulo operator on each iteration ,to avoid collisions
        }
        console.log(hashCode);
        return hashCode;
    };
   
    this.set = function(key, value) {
        if (this.filled / this.buckets.length >= this.loadFactor) { this.grow(); };

        let index = this.hash(key);
        if (this.buckets[index]) {
            this.buckets[index] = new LinkedList();
        };
        this.filled++;
        this.buckets[index].insertAtHead(key,value);


    };

    this.length = function() {
        console.log(this.filled);
        return this.filled;
    };

    this.grow = function() {

    };

};

const luca = new HashMap();
luca.hash('luca');
luca.length();



