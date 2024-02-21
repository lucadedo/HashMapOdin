import { LinkedList } from "./LinkedList.mjs";

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
          
        };

        let index = hashCode % this.buckets.length;//  apply the  % modulo operator on each iteration ,to avoid collisions

        if (index < 0 || index >= this.buckets.length) { // check if index is out of bound
            throw new Error("Trying to access index out of bound");
        };

        //console.log(hashCode);
        return index;
    };
   


    this.set = function(key, value) {
        if (this.filled / this.buckets.length >= this.loadFactor) { 
            this.grow();
        };

        let index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = new LinkedList();
            console.log(this.buckets);
        };
        this.filled++;
        this.buckets[index].insertAtHead(key,value);
    };

    this.get = function(key) {
        //get the key value
        let index = this.hash(key);
        let res = this.buckets[index].getElementIndex(key);
        console.log(res);
        return this.buckets[index].getElementIndex(key);

    };

    this.has = function(key) {
        let index = this.hash(key);
        let res = this.buckets[index].contains(key)
       console.log(res);
       return this.buckets[index].contains(key);
    }


    this.length = function() {
        console.log('HashMap length: ' + this.filled);
        return this.filled;
    };

    this.grow = function() {
        this.capacity = this.buckets.length * 2;
    };

    this.clear = function() {
        this.filled = 0;
        this.buckets = new Array(16);
		this.capacity = this.buckets.length;
    };
    

};

const FamilyHashMap = new HashMap();
// luca.hash('luca');


FamilyHashMap.set('DAD','Mauro');
FamilyHashMap.set('MOM','Monica');
FamilyHashMap.set('firstSon','Paolo')
FamilyHashMap.set('secondSon','Luca');
FamilyHashMap.set('firstSon','Paolo2');

//FamilyHashMap.get('firstSon');

FamilyHashMap.has('MOM');
FamilyHashMap.has('secondSon2');


FamilyHashMap.length();



