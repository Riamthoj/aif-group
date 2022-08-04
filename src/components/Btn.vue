<template>
    <v-btn
        :class="classStyles"
        @click="iClick"
    >
        <v-icon left v-if="vicon">mdi-{{vicon}}</v-icon>
        <span  v-if="getText">
            {{ getText }}
        </span>
    </v-btn>
</template>

<script>
export default {
    name: "ButtonComponent",
    props: {
        iclass: String,
        text: String,
        onClick: Function,
        icon: String
    },
    setup(props) {
        return {
            getText: props.text,
            iClick: props.onClick,
            classStyles: props.iclass,
            vicon: props.icon
        };
    },
};
</script>
