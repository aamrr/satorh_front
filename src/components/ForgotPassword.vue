<template>
    <div class="vue-tempalte">
        <form>
            <h3>Forgot Password</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Reset password</button>

        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped>
    h3{
        text-align: center;
        margin-bottom: 2rem;
    }

    form{
        background-color: white;
        border-radius: 2rem;
        padding: 2rem;
        width: 21rem;
        margin: 6rem auto;
    }
</style>