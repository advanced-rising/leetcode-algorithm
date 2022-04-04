/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1 || !list2) return list1 || list2
    if(!list1 && !list2) return null
    
    let dummy = new ListNode ( -1) 
    let curr = dummy
    
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            curr.next = new ListNode(list1.val);
            list1 = list1.next
        }else {
            curr.next = new ListNode(list2.val)
            list2 = list2.next
        }
        curr = curr.next
    }
    curr.next = list1 || list2
    
    return dummy.next
    
};