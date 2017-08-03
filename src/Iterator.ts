interface IIterator{
    /**
     * Move to next element.
     */
    next() : void;
    /**
     * Has next value?
     */
    hasNext() : Boolean;
}