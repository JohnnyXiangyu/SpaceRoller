//put all physical algorithms here

//keeping trach of the physical attributes of the player
//PlayerPhysicalAttributes class defines a group of phycisl attributes, including angle, speed, acceleration
//haven't decided how to update these attributes. might just use external functions
function PlayerPhyscialAttributes() {
    newAttribute = {slope: 0, speed: 0, acceleration: 0};
    return newAttribute;
}