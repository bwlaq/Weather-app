<script>
    let count = 0;
    function counter(){
        count += 1;
    }
    function decrease(){
        count -= 1;
    }
    $: console.log('The count is ' + count);
    $: if(count > 5) {
        alert('the count is ' + count + ' now!!!')
    }
</script>

<button on:click="{counter}"> Clicked {count} {count === 1 ? 'time' : 'times'}</button>
<button on:click="{decrease}"> Clicked {count} {count === 1 ? 'time' : 'times'}</button>