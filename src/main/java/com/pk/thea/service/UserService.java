package com.pk.thea.service;

import com.pk.thea.jpa.Settings;
import com.pk.thea.jpa.User;
import com.pk.thea.jpa.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class UserService{

    public static void main(String[] args){
        List<String> blist = new ArrayList<>();
        blist.add("typeC");
        blist.add("typeB");
        List<Settings> alist = new ArrayList<>();
        alist.add(new Settings("a","nameA","typeA"));
        alist.add(new Settings("b","nameB","typeB"));
        alist.add(new Settings("c","nameC","typeC"));
        alist.add(new Settings("d","nameD","typeD"));
        long start = System.currentTimeMillis();
        //System.out.println(alist.toString());
        //System.out.println(bList.toString());

        //List<Settings> clist =
        List<String>dlist = alist.stream().flatMap(i-> blist.stream().filter(j->j.equalsIgnoreCase(i.getType()))).collect(Collectors.toList());
        System.out.println(dlist.toString());
        long end = System.currentTimeMillis();
        System.out.println("CTime taken " +(end - start) + "ms");

        start = System.currentTimeMillis();
        List<Settings>elist = blist.stream().flatMap(i->alist.stream().filter(j->!j.getType().equalsIgnoreCase(i))).collect(Collectors.toList());
        System.out.println(elist.toString());
        end = System.currentTimeMillis();
        System.out.println("CTime taken 2: " +(end - start) + "ms");

        start = System.currentTimeMillis();
        blist.forEach(i->{
            Stream<Settings> s=alist.stream().filter(k->!k.getType().equalsIgnoreCase(i));
            System.out.println(s.collect(Collectors.toList()).toString());
        });

        end = System.currentTimeMillis();
        System.out.println("CTime taken 3: " +(end - start) + "ms");

        start = System.currentTimeMillis();
        blist.forEach(i->{
            System.out.println(i);
            alist.removeIf(k->k.getType().equalsIgnoreCase(i));
        });

        System.out.println(alist.toString());;
        end = System.currentTimeMillis();
        System.out.println("CTime taken 4: " +(end - start) + "ms");

    }
}


